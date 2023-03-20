import { Grid } from '@mui/material';
import Image from 'next/image';
import CalmImage from '../public/images/calm.jpg';
import PurposeTall from '../public/images/purpose_tall.jpg';
import React, { FC } from 'react';
import { Box } from '@mui/system';
import ContactSection from '../components/sections/ContactSection';

const BottomSection: FC = () => {
  return (
    <Grid item container xs={12} sx={{ marginTop: { xs: 5, md: 32 } }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          marginTop: { xs: 0, md: 29 },
          marginBottom: { xs: 5, md: 0 },
          marginRight: { xs: 0, md: 5 }
        }}>
        <Image
          alt="A sunset over a calm beach"
          src={PurposeTall}
          style={{ width: '100%', height: 'auto', zIndex: 1, position: 'relative' }}
          priority
        />
      </Grid>
      <Grid item xs={12} md={true} sx={{ marginBottom: { xs: '-4px', md: '0px' } }}>
        <Image
          src={CalmImage}
          alt="Somebody working with a laptop in a scenic environment"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </Grid>
      <Box
        sx={{
          marginTop: { md: '-350px' },
          paddingTop: { md: '350px' },
          width: '100%',
          bgcolor: 'primary.main',
          zIndex: 0
        }}>
        <Grid item xs={12} sx={{ paddingBottom: { xs: 16, md: 32 } }}>
          <ContactSection useContrastColors />
        </Grid>
      </Box>
    </Grid>
  );
};

export default BottomSection;
