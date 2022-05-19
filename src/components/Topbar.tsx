import { Grid, SvgIcon } from '@mui/material';
import { FC } from 'react';

// import { ReactComponent as DefaultLogo } from '../assets/Images/logo_default.svg';
import DefaultLogo from '../assets/Images/logo_default.svg';

const Topbar: FC = () => {
  return (
    <Grid container justifyItems="space-between">
      <Grid item>
        <Image width={100} height={100} src={DefaultLogo} />
        {/* <SvgIcon component={DefaultLogo} /> */}
      </Grid>
      <Grid item>{/* <SvgIcon component={DefaultLogo} /> */}</Grid>
    </Grid>
  );
};

export default Topbar;
