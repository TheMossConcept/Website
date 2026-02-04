import { useEffect, useRef, useState, useCallback } from 'react';
import { StaticImageData } from 'next/image';
import Hls from 'hls.js';

interface HeroVideoProps {
  src: string; // Your Mux HLS URL
  posterImage: string; // First frame image
  animationDuration?: number; // Default 1500ms
}

 function FrontpageVideo({ 
  src, 
  posterImage, 
  animationDuration = 1500 
}: HeroVideoProps) {
  const [rightPosition, setRightPosition] = useState(-100);

  useEffect(() => {
    setRightPosition(0);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  
  const [isReady, setIsReady] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [isRecordingComplete, setIsRecordingComplete] = useState(false);

  // Lock to highest quality level
  const lockToHighestQuality = useCallback((hls: Hls) => {
    const levels = hls.levels;
    if (levels.length > 0) {
      // Find the highest quality level (highest height = 4K)
      const maxLevelIndex = levels.reduce((maxIdx, level, idx, arr) => 
        level.height > arr[maxIdx].height ? idx : maxIdx
      , 0);
      
      // Lock to this level - this disables ABR
      hls.currentLevel = maxLevelIndex;
      hls.loadLevel = maxLevelIndex;
      
      console.log(`Locked to level ${maxLevelIndex}: ${levels[maxLevelIndex].width}x${levels[maxLevelIndex].height}`);
    }
  }, []);

  // Start recording the video for caching
  const startRecording = useCallback(() => {
    const video = videoRef.current;
    if (!video || mediaRecorderRef.current) return;

    try {
      // Capture the video stream
      const stream = (video as any).captureStream?.() || (video as any).mozCaptureStream?.();
      if (!stream) {
        console.warn('captureStream not supported - falling back to HLS-only mode');
        return;
      }

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9',
        videoBitsPerSecond: 50_000_000 // High bitrate for 4K
      });

      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const blobUrl = URL.createObjectURL(blob);
        
        // Switch to cached blob for seamless looping
        if (videoRef.current) {
          const currentTime = videoRef.current.currentTime;
          videoRef.current.src = blobUrl;
          videoRef.current.load();
          videoRef.current.currentTime = currentTime;
          videoRef.current.play();
          
          // Clean up HLS instance
          if (hlsRef.current) {
            hlsRef.current.destroy();
            hlsRef.current = null;
          }
        }
        
        setIsRecordingComplete(true);
        console.log('Switched to cached blob for seamless looping');
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      console.log('Started recording for cache');
    } catch (error) {
      console.warn('MediaRecorder setup failed:', error);
    }
  }, []);

  // Stop recording when video completes first loop
  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  // Initialize HLS and preload
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationTimeout: NodeJS.Timeout;
    let playStarted = false;

    if (Hls.isSupported()) {
      const hls = new Hls({
        // Aggressive preloading settings
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        maxBufferSize: 400 * 1024 * 1024, // 400MB buffer
        maxBufferHole: 0.1,
        // Start loading immediately
        autoStartLoad: true,
        // Don't limit quality based on player size (important for 4K)
        capLevelToPlayerSize: false,
        // Start with highest quality
        startLevel: -1, // Will be overridden once manifest loads
      });

      hlsRef.current = hls;

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        lockToHighestQuality(hls);
        
        // Start buffering immediately
        video.preload = 'auto';
      });

      hls.on(Hls.Events.FRAG_BUFFERED, () => {
        // Check if we have enough buffer to start
        if (!isReady && video.buffered.length > 0) {
          const bufferedSeconds = video.buffered.end(0);
          // Wait until we have at least 3 seconds buffered at 4K
          if (bufferedSeconds >= 3) {
            setIsReady(true);
            console.log(`Buffered ${bufferedSeconds.toFixed(1)}s at 4K - ready to play`);
          }
        }
      });

      // Re-lock quality if HLS tries to change it
      hls.on(Hls.Events.LEVEL_SWITCHING, (_, data) => {
        const levels = hls.levels;
        const maxLevelIndex = levels.reduce((maxIdx, level, idx, arr) => 
          level.height > arr[maxIdx].height ? idx : maxIdx
        , 0);
        
        if (data.level !== maxLevelIndex) {
          // Force back to max quality
          hls.currentLevel = maxLevelIndex;
        }
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      // Handle video timeupdate to detect first loop completion
      const handleTimeUpdate = () => {
        // Start recording shortly after video starts
        if (!playStarted && video.currentTime > 0.1) {
          playStarted = true;
          startRecording();
        }
      };

      // Detect when video is about to loop
      const handleEnded = () => {
        if (!isRecordingComplete) {
          stopRecording();
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      // Start the animation timer
      animationTimeout = setTimeout(() => {
        setShowPoster(false);
        if (isReady || video.readyState >= 3) {
          video.play().catch(console.error);
        } else {
          // If not ready yet, play anyway but it should be close
          video.play().catch(console.error);
        }
      }, animationDuration);

      return () => {
        clearTimeout(animationTimeout);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
        hls.destroy();
        
        if (mediaRecorderRef.current?.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS support
      video.src = src;
      
      animationTimeout = setTimeout(() => {
        setShowPoster(false);
        video.play().catch(console.error);
      }, animationDuration);

      return () => clearTimeout(animationTimeout);
    }
  }, [src, animationDuration, isReady, lockToHighestQuality, startRecording, stopRecording, isRecordingComplete]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* First frame poster - shown during entry animation */}
      {showPoster && (
        <img
          src={posterImage}
          style={{ 
            transform: `translateX(${rightPosition}vw)`,
            transition: 'transform 1380ms ease-out',
            position: 'absolute',
            objectFit: 'fill',
            maxHeight: '100vh',
            height: '100vh',
            width: '100vw'
          }}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
      )}
      
      {/* Video element - always mounted for preloading */}
      <video
        ref={videoRef}
        style={{ 
          display: showPoster ? 'none' : undefined, 
          position: 'absolute',
          objectFit: 'fill',
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw'
        }}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop={!mediaRecorderRef.current || isRecordingComplete} // Don't loop during recording
        preload="auto"
      />
      
      {/* Your entry animation overlay would go here */}
      {/* Example: */}
      {/* <EntryAnimation isPlaying={showPoster} /> */}
    </div>
  );
}

export default FrontpageVideo;
