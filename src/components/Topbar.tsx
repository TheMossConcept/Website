import { Grid } from '@mui/material';
import { FC } from 'react';
import { ReactComponent as DefaultLogo } from '../assets/Images/logo_default.svg';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar: FC = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <DefaultLogo height={50} width={106.5} />
      </Grid>
      <Grid item>
        <MenuIcon />
      </Grid>
    </Grid>
  );
};

export default Topbar;
