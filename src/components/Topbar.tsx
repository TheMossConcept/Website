import { Grid, SvgIcon } from '@mui/material';
import { FC } from 'react';

import { ReactComponent as DefaultLogo } from '../assets/Images/logo_default.svg';

type Props = {};

const Topbar: FC<Props> = () => {
  return (
    <Grid container justifyItems="space-between">
      <Grid item>
        <SvgIcon component={DefaultLogo} />
      </Grid>
      <Grid item>
        <SvgIcon component={DefaultLogo} />
      </Grid>
    </Grid>
  );
};

export default Topbar;
