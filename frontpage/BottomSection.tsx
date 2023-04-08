import { Grid } from '@mui/material';
import CalmImage from '../public/images/calm.jpg';
import PurposeTall from '../public/images/purpose_tall.jpg';
import React, { FC } from 'react';
import { Box } from '@mui/system';
import ContactSection from '../components/sections/ContactSection';
import MediaSection from '../components/sections/MediaSection';

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
        <MediaSection
          mediaUrl={PurposeTall}
          mediaLocation="full-screen"
          imageDimensions={{ width: '100%', height: 'auto' }}
          style={{ zIndex: 1, position: 'relative' }}
        />
      </Grid>
      <Grid item xs={12} md={true} sx={{ marginBottom: { xs: '-4px', md: '0px' } }}>
        <MediaSection
          mediaUrl={CalmImage}
          mediaLocation="full-screen"
          imageDimensions={{ width: '100%', height: 'auto' }}
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
        <Grid item xs={12} sx={{ paddingBottom: { xs: 5, md: 32 } }}>
          <ContactSection useContrastColors />
        </Grid>
      </Box>
    </Grid>
  );
};

export default BottomSection;
