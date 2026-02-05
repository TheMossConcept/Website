import { Grid } from '@mui/material';
import { StaticImageData } from 'next/image';
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
  marginTop?: number;
  style?: CSSProperties;
  shouldCarouselMultipleMedias?: boolean;
  disableImageMovement?: boolean;
  mediaItems: MediaItem[];
};

const MediaSection: FC<Props> = ({
  mediaLocation,
  style,
  disableImageMovement,
  marginTop,
  mediaItems,
  shouldCarouselMultipleMedias = true
}) => {
  const isMobile = useIsMobile();
  const mt = marginTop !== undefined ? marginTop : isMobile ? 16 : 32;

  const isFullScreen = mediaLocation === 'full-screen';

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [imageOffsetAmount, setImageOffsetAmount] = useState(0);
  const imageMoveRangeInPixels = 100;

  // Media rotation state
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const hasMultipleMedia = mediaItems.length > 1;

  // Media rotation effect - only runs when there are multiple media items
  // and the prop hasn't been set to explicitly disable this effect
  useEffect(() => {
    if (!hasMultipleMedia) return;
    if (!shouldCarouselMultipleMedias) return;

    const rotationInterval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 5000); // 5 seconds per media item

    return () => clearInterval(rotationInterval);
  }, [hasMultipleMedia, mediaItems.length, shouldCarouselMultipleMedias]);

  // Video handling for rotation - restart video when it becomes active
  useEffect(() => {
    if (!hasMultipleMedia) return;

    const currentMedia = mediaItems[currentMediaIndex];
    const currentVideoRef = videoRefs.current[currentMediaIndex];

    if (currentMedia.isVideo && currentVideoRef) {
      currentVideoRef.currentTime = 0;
      currentVideoRef.play().catch(() => {
        // Ignore play errors (e.g., autoplay restrictions)
      });
    }
  }, [currentMediaIndex, hasMultipleMedia, mediaItems]);

  // Moves focus up/down insid the media in response to user scroll
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

  // Render media element
  const renderMedia = (media: MediaItem, index: number) => {
    const wrapperStyle: CSSProperties = {
      minWidth: '100%',
      width: '100%',
      flexShrink: 0
    };

    if (media.isVideo) {
      // Videos only support string URLs, not StaticImageData
      const videoUrl = typeof media.mediaUrl === 'string' ? media.mediaUrl : media.mediaUrl.src;
      return (
        <div key={`video-${index}`} style={wrapperStyle}>
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            autoPlay
            muted
            loop={!hasMultipleMedia}
            playsInline
            style={{
              width: media.imageDimensions?.width || '100%',
              height: media.imageDimensions?.height || 'auto',
              display: 'block',
              // If we take granular control of the dimensions, we also don't expect the image to be exactly contained.
              // If we have chosen to overwrite the aspect ratio, we essentially get exactly what we are asking for
              // whether or not that makes sense
              objectFit: media.imageDimensions ? 'fill' : 'contain',
              ...style
            }}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      );
    }

    return (
      <div key={`image-${index}`} style={wrapperStyle}>
        <img
          src={media.mediaUrl}
          alt="An image that cannot be loaded at the moment"
          style={{
            width: media.imageDimensions?.width || '100%',
            height: media.imageDimensions?.height || 'auto',
            display: 'block',
            // If we take granular control of the dimensions, we also don't expect the image to be exactly contained.
            // If we have chosen to overwrite the aspect ratio, we essentially get exactly what we are asking for
            // whether or not that makes sense
            objectFit: media.imageDimensions ? 'fill' : 'contain',
            ...style
          }}
          placeholder="blur"
        />
      </div>
    );
  };

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
            position: 'relative',
            overflow: 'hidden'
          }}
          ref={mediaContainerRef}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              transform: `translateX(-${currentMediaIndex * 100}%)`,
              transition: hasMultipleMedia ? 'transform 0.8s ease-in-out' : undefined
            }}>
            {mediaItems.map((media, index) => renderMedia(media, index))}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediaSection;
