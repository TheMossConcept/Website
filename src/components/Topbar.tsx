import { Grid } from '@mui/material';
import { FC } from 'react';
import { ReactComponent as DefaultLogo } from '../assets/Images/logo_default.svg';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar: FC = () => {
  return (
    <div style={{ position: 'fixed', width: '100%' }}>
      <Grid item xs={12} sx={{ mt: 1, mx: 1 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <DefaultLogo height={50} width={106.5} />
          </Grid>
          <Grid item>
            <MenuIcon />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Topbar;
