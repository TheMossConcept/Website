import { Grid } from '@mui/material';
import Image from 'mui-image';
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
  mt?: number;
  imageDimensions?: MediaDimensions;
};

const MediaSection: FC<Props> = ({
  mediaLocation,
  mediaUrl,
  imageDimensions = { width: '100%', height: 'auto' },
  isVideo = false,
  mt = 32
}) => {
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
        <Grid item xs={mediaLocation === 'full-screen' ? 12 : 9}>
          {isVideo ? (
            <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
              <source src={mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={mediaUrl}
              width={imageDimensions.width}
              height={imageDimensions.height}
              wrapperStyle={{ margin: 'auto' }}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediaSection;
