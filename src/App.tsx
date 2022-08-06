import { Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import TextContainer from './components/TextContainer';
import Topbar from './components/Topbar';
import Frontpage from './pages/Frontpage';

const App: FC = () => {
  const [scrollY, setScollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log(scrollY);

  return (
    <>
      <Topbar />
      <Frontpage />
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        style={{ height: '100vh', paddingTop: '25vh', backgroundColor: '#383838' }}>
        <TextContainer>
          <Typography
            color="text.primary"
            variant="PoppinsBig-h1"
            component="span"
            sx={{ transform: `translate(${scrollY / 10}px)` }}
            textAlign="start">
            A{' '}
          </Typography>
          <Typography
            color="text.secondary"
            variant="TobiasBig-h1"
            component="span"
            sx={{ transform: `translate(${scrollY / 10}px)` }}>
            disruptive
          </Typography>
          <Typography
            color="text.primary"
            variant="PoppinsBig-h1"
            sx={{ ml: '354px', transform: `translate(-${scrollY / 10}px)` }}
            component="h1">
            concept
          </Typography>
        </TextContainer>
      </Grid>
    </>
  );
};

export default App;
