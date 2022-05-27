import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import Topbar from './components/Topbar';

const App: FC = () => {
  return (
    <Grid container alignItems="flex-start" style={{ height: '100vh' }}>
      <Grid item xs={12} sx={{ mt: 1, mx: 1 }}>
        <Topbar />
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary.transparent" variant="PoppinsBig-h1" sx={{ ml: '10.28%' }}>
          Software development
        </Typography>
        <Typography color="primary.transparent" variant="PoppinsBig-h1" sx={{ ml: '34.86%' }}>
          crafted to fit
        </Typography>
        <Typography color="primary" variant="TobiasBig-h1" sx={{ ml: '18.47%' }}>
          your workflow.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default App;
