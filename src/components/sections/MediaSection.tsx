import { Grid } from '@mui/material';
import { FC } from 'react';

type Placement = 'left' | 'right' | 'full-screen';

type Props = { mediaLocation: Placement; imageUrl: string };

const MediaSection: FC<Props> = ({ mediaLocation, imageUrl }) => {
  return (
    <Grid item xs={12} sx={{ mt: 32 }}>
      <Grid container justifyContent={mediaLocation === 'left' ? 'flex-start' : 'flex-end'}>
        <Grid item xs={mediaLocation === 'full-screen' ? 12 : 9}>
          <img src={imageUrl} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediaSection;
