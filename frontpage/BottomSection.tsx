import { Grid } from '@mui/material';
import Image from 'next/image';
import CalmImage from '../public/images/calm.jpg';
import PurposeTall from '../public/images/purpose_tall.jpg';
import React, { FC } from 'react';
import { Box } from '@mui/system';
import ContactSection from '../components/sections/ContactSection';

const BottomSection: FC = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 32 }}>
      <Grid item xs={6} sx={{ mt: 29 }}>
        <Image
          alt="A sunset over a calm beach"
          src={PurposeTall}
          style={{ width: '100%', height: 'auto', zIndex: 1, position: 'relative' }}
          priority
        />
      </Grid>
      <Grid item xs={6}>
        <Image
          src={CalmImage}
          alt="Somebody working with a laptop in a scenic environment"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </Grid>
      <Box
        sx={{
          mt: '-350px',
          pt: '350px',
          width: '100%',
          bgcolor: 'primary.main',
          zIndex: 0
        }}>
        <Grid item xs={12} sx={{ pb: 32 }}>
          <ContactSection useContrastColors />
        </Grid>
      </Box>
    </Grid>
  );
};

export default BottomSection;
