import { Grid } from '@mui/material';
import { FC } from 'react';

type Placement = 'left' | 'right' | 'full-screen';

type Props = { mediaLocation: Placement; mediaUrl: string; isVideo?: boolean };

const MediaSection: FC<Props> = ({ mediaLocation, mediaUrl, isVideo = false }) => {
  return (
    <Grid item xs={12} sx={{ mt: 32 }}>
      <Grid container justifyContent={mediaLocation === 'left' ? 'flex-start' : 'flex-end'}>
        <Grid item xs={mediaLocation === 'full-screen' ? 12 : 9}>
          {isVideo ? (
            <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
              <source src={mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <img src={mediaUrl} style={{ width: '100%', height: 'auto' }} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediaSection;
