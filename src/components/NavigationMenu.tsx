import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {};

const NavigationMenu: FC<Props> = () => {
  return (
    <Grid item xs={12}>
      <Box sx={{}}>
        <Typography>This is a test!</Typography>
      </Box>
    </Grid>
  );
};

export default NavigationMenu;
