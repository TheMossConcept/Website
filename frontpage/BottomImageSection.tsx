import { Grid } from '@mui/material';
import Image from 'next/image';
import CalmImage from '../public/images/calm.jpg';
import PurposeTall from '../public/images/purpose_tall.jpg';
import React, { FC } from 'react';

const BottomImageSection: FC = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 32 }}>
      <Grid item xs={6} sx={{ mt: 29 }}>
        <Image
          alt="A sunset over a calm beach"
          src={PurposeTall}
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xs={6}>
        <Image
          src={CalmImage}
          alt="Somebody working with a laptop in a scenic environment"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default BottomImageSection;
