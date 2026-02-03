import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Box } from '@mui/system';
import ContactSection from '../components/sections/ContactSection';

const BottomSection: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        zIndex: 0
      }}>
      <Grid item xs={12} sx={{ paddingBottom: { xs: 5, md: 32 } }}>
        <ContactSection useContrastColors />
      </Grid>
    </Box>
  );
};

export default BottomSection;
