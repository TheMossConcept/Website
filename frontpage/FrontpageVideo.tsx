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
  
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    const videoRefElement = videoRef.current
    if (videoRefElement) {
      videoRefElement.oncanplay = () => {
        videoRef.current?.play()
        setShowPoster(false)
      }
    }
  }, [videoRef])

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


  // Initialize HLS and preload
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS support
      video.src = src;
    }
  }, [src, animationDuration, lockToHighestQuality]);

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
          position: 'absolute',
          objectFit: 'fill',
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw'
        }}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop={true}
        preload="auto"
      />
      
      {/* Your entry animation overlay would go here */}
      {/* Example: */}
      {/* <EntryAnimation isPlaying={showPoster} /> */}
    </div>
  );
}

export default FrontpageVideo;
