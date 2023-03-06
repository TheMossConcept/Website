import { Grid } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

const BottomImageSection: FC = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 32 }}>
      <Grid item xs={6} sx={{ mt: 29 }}>
        <img
          alt="An image that cannot be loaded at the moment"
          src="/images/collaboration.jpg"
          /*
          width={100}
          height={100}
           */
          // fill={true}
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xs={6}>
        <img
          src="/images/purpose_tall.jpg"
          /*
          width={100}
          height={100}
           */
          alt="An image that cannot be loaded at the moment"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default BottomImageSection;
