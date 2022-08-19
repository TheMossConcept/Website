import { Box, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { ReactComponent as DefaultLogo } from '../assets/Images/logo_default.svg';
import { ReactComponent as MenuLogo } from '../assets/Images/menu_icon.svg';

const Topbar: FC = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(100);
  }, []);

  return (
    <Box sx={{ position: 'fixed', width: '100%', zIndex: 'appBar' }}>
      <Grid item xs={12} sx={{ mt: 1, mx: 1 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <DefaultLogo
              height={50}
              width={106.5}
              style={{ opacity, transition: 'opacity 630ms ease-out 920ms' }}
            />
          </Grid>
          <Grid item>
            <MenuLogo width={29} height={16} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topbar;
