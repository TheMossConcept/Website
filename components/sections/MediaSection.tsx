import { Grid } from '@mui/material';
import Image from 'next/image';
import useIsMobile from '../../utilities/useIsMobile';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

type Placement = 'left' | 'right' | 'full-screen';

type MediaDimensions = {
  width: string;
  height: string;
};

type Props = {
  mediaLocation: Placement;
  mediaUrl: string;
  isVideo?: boolean;
  marginTop?: number;
  imageDimensions?: MediaDimensions;
  style?: CSSProperties;
  disableImageMovement?: boolean;
};

const MediaSection: FC<Props> = ({
  mediaLocation,
  mediaUrl,
  imageDimensions = { width: '100%', height: 'auto' },
  isVideo = false,
  style,
  disableImageMovement,
  marginTop
}) => {
  const isMobile = useIsMobile();
  // Different default values for mobile and  desktop
  const mt = marginTop !== undefined ? marginTop : isMobile ? 16 : 32;

  const isFullScreen = mediaLocation === 'full-screen';

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const [imageOffsetAmount, setImageOffsetAmount] = useState(0);
  const imageMoveRangeInPixels = 100;

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
            zIndex: 1
            /*
            transform: disableImageMovement
              ? undefined
              : `translateY(${imageMoveRangeInPixels / 2 - imageOffsetAmount}px`
               */
          }}
          ref={mediaContainerRef}>
          {isVideo ? (
            <video
              autoPlay
              muted
              loop
              style={{
                width: isFullScreen ? '100vw' : '100%',
                height: isFullScreen ? '110vh' : 'auto',
                objectFit: isFullScreen ? 'fill' : undefined,
                ...style
              }}>
              <source src={mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={mediaUrl}
              alt="An image that cannot be loaded at the moment"
              style={{
                width: imageDimensions.width,
                height: imageDimensions.height,
                ...style
              }}
              placeholder="blur"
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediaSection;
