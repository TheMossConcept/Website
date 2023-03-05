import { Grid } from '@mui/material';
// import Image from 'next/image';
import { FC } from 'react';

const BottomImageSection: FC = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 32 }}>
      <Grid item xs={6} sx={{ mt: 29 }}>
        <img
          src="/images/trust_and_respect.jpg"
          alt="An image that cannot be loaded at the moment"
          // fill={true}
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xs={6}>
        <img
          alt="An image that cannot be loaded at the moment"
          src="/images/purpose_tall.jpg"
          // fill={true}
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default BottomImageSection;
