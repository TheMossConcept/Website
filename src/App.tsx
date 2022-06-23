import { Collapse, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import TextContainer from './components/TextContainer';
import Topbar from './components/Topbar';

const App: FC = () => {
  return (
    <>
      <Grid container alignItems="flex-start" justifyContent="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sx={{ mt: 1, mx: 1 }}>
          <Topbar />
        </Grid>
        <TextContainer>
          <Typography color="primary.transparent" variant="PoppinsBig-h1" component="h1">
            Software development
          </Typography>
          <Typography
            color="primary.transparent"
            variant="PoppinsBig-h1"
            sx={{ ml: '354px' }}
            component="h1">
            crafted to fit
          </Typography>
          <Typography color="primary" variant="TobiasBig-h1" component="h2" sx={{ ml: '118px' }}>
            your workflow.
          </Typography>
        </TextContainer>
      </Grid>

      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        style={{ height: '100vh', backgroundColor: '#383838' }}>
        <TextContainer>
          <Typography
            color="text.primary"
            variant="PoppinsBig-h1"
            component="span"
            textAlign="start">
            A{' '}
          </Typography>
          <Typography color="text.secondary" variant="TobiasBig-h1" component="span">
            disruptive
          </Typography>
          <Typography
            color="text.primary"
            variant="PoppinsBig-h1"
            sx={{ ml: '354px' }}
            component="h1">
            concept
          </Typography>
        </TextContainer>
      </Grid>
    </>
  );
};

export default App;
