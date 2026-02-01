import { Grid, Slide } from '@mui/material';
import Image from 'next/image';
import useIsMobile from '../../utilities/useIsMobile';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

type Placement = 'left' | 'right' | 'full-screen';

type MediaDimensions = {
  width: string;
  height: string;
};

type MediaItem = {
  mediaUrl: string;
  isVideo?: boolean;
  imageDimensions?: MediaDimensions;
};

type Props = {
  mediaLocation: Placement;
  mediaUrl?: string;
  isVideo?: boolean;
  marginTop?: number;
  imageDimensions?: MediaDimensions;
  style?: CSSProperties;
  disableImageMovement?: boolean;
  mediaItems?: MediaItem[];
};

const MediaSection: FC<Props> = ({
  mediaLocation,
  mediaUrl,
  imageDimensions = { width: '100%', height: 'auto' },
  isVideo = false,
  style,
  disableImageMovement,
  marginTop,
  mediaItems
}) => {
  const isMobile = useIsMobile();
  // Different default values for mobile and  desktop
  const mt = marginTop !== undefined ? marginTop : isMobile ? 16 : 32;

  const isFullScreen = mediaLocation === 'full-screen';

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageOffsetAmount, setImageOffsetAmount] = useState(0);
  const imageMoveRangeInPixels = 100;

  // Media rotation state
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Normalize media items - support both old single media prop and new array prop
  const normalizedMediaItems: MediaItem[] = mediaItems || [
    {
      mediaUrl: mediaUrl || '',
      isVideo,
      imageDimensions
    }
  ];

  const hasMultipleMedia = normalizedMediaItems.length > 1;
  const currentMedia = normalizedMediaItems[currentMediaIndex];

  // Media rotation effect - only runs when there are multiple media items
  useEffect(() => {
    if (!hasMultipleMedia) return;

    const rotationInterval = setInterval(() => {
      setIsTransitioning(true);

      // Wait for fade out, then change media
      setTimeout(() => {
        setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % normalizedMediaItems.length);
        setIsTransitioning(false);
      }, 300); // Half of the transition duration for crossfade effect
    }, 5000); // 5 seconds per media item

    return () => clearInterval(rotationInterval);
  }, [hasMultipleMedia, normalizedMediaItems.length]);

  // Video handling for rotation - restart video when it becomes active
  useEffect(() => {
    if (currentMedia.isVideo && videoRef.current && hasMultipleMedia) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Ignore play errors (e.g., autoplay restrictions)
      });
    }
  }, [currentMediaIndex, currentMedia.isVideo, hasMultipleMedia]);

  useEffect(() => {
    let initialScrollValue: number;
    const handleScroll = () => {
      // We'll only ever have one of these set
      const boundingRect = mediaContainerRef.current?.getBoundingClientRect();

      if (boundingRect) {
        const totalMoveableArea = window.screen.availHeight + boundingRect?.height;
        const changeNecessaryToCauseMovement = totalMoveableArea / imageMoveRangeInPixels;

        const isWithinMoveableArea =
          boundingRect.top < window.screen.availHeight && boundingRect.top > -boundingRect.height;
        if (isWithinMoveableArea) {
          if (!initialScrollValue) {
            initialScrollValue = window.scrollY;
          }

          setImageOffsetAmount(
            (window.scrollY - initialScrollValue) / changeNecessaryToCauseMovement
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mediaContainerRef]);

  return (
    <Grid item xs={12} sx={{ mt }}>
      <Grid
        container
        alignContent="center"
        style={{ overflow: 'hidden' }}
        justifyContent={
          mediaLocation === 'left'
            ? 'flex-start'
            : mediaLocation === 'right'
            ? 'flex-end'
            : 'center'
        }>
        <Grid
          item
          sm={12}
          md={isFullScreen ? 12 : 9}
          style={{
            textAlign: 'center',
            zIndex: 1,
            transform: disableImageMovement
              ? undefined
              : `translateY(${imageOffsetAmount - imageMoveRangeInPixels / 2}px`,
            position: 'relative'
          }}
          ref={mediaContainerRef}>
          <Slide in={true} direction="left">
          {currentMedia.isVideo ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop={!hasMultipleMedia}
              playsInline
              style={{
                width: isFullScreen ? '100vw' : '100%',
                height: isFullScreen ? '110vh' : 'auto',
                objectFit: isFullScreen ? 'fill' : undefined,
                transition: 'opacity 0.6s ease-in-out',
                opacity: isTransitioning ? 0 : 1,
                ...style
              }}>
              <source src={currentMedia.mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={currentMedia.mediaUrl}
              alt="An image that cannot be loaded at the moment"
              style={{
                width: currentMedia.imageDimensions?.width || imageDimensions.width,
                height: currentMedia.imageDimensions?.height || imageDimensions.height,
                transition: 'opacity 0.6s ease-in-out',
                opacity: isTransitioning ? 0 : 1,
                ...style
              }}
              placeholder="blur"
            />
          )}
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediaSection;
