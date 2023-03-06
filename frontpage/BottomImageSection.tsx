import { Grid } from '@mui/material';
import Image from 'next/image';
import TrustAndRespectImage from '../public/images/trust_and_respect.jpg';
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
          src={TrustAndRespectImage}
          alt="A father with his small child looking at birds in the sunset"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default BottomImageSection;
