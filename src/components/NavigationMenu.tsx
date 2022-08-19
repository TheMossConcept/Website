import { Box, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

type Props = { isOpen: boolean };

const NavigationMenu: FC<Props> = ({ isOpen }) => {
  // Always start in the closed state, as we need to change the value to trigger the transition
  const [rightPosition, setRightPosition] = useState('-50%');

  useEffect(() => {
    if (isOpen) {
      setRightPosition('0%');
    } else {
      setRightPosition('-50%');
    }
  }, [isOpen]);

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          position: 'fixed',
          right: rightPosition,
          width: '50%',
          height: '100%',
          bgcolor: 'secondary.main',
          transition: 'right 500ms cubic-bezier(0,0,0.58,1)'
        }}>
        <Typography>This is a test!</Typography>
      </Box>
    </Grid>
  );
};

export default NavigationMenu;
