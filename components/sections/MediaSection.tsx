import { Grid } from '@mui/material';
import Image from 'next/image';
import useIsMobile from '../../utilities/useIsMobile';
import { FC } from 'react';

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
};

const MediaSection: FC<Props> = ({
  mediaLocation,
  mediaUrl,
  imageDimensions = { width: '100%', height: 'auto' },
  isVideo = false,
  marginTop
}) => {
  const isMobile = useIsMobile();
  // Different default values for mobile and  desktop
  const mt = marginTop ? marginTop : isMobile ? 16 : 32;

  return (
    <Grid item xs={12} sx={{ mt }}>
      <Grid
        container
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
          md={mediaLocation === 'full-screen' ? 12 : 9}
          style={{ textAlign: 'center' }}>
          {isVideo ? (
            <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
              <source src={mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={mediaUrl}
              alt="An image that cannot be loaded at the moment"
              style={{
                width: imageDimensions.width,
                height: imageDimensions.height
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
