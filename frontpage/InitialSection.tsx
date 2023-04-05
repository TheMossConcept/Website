import { Box, Typography, Grid } from '@mui/material';
import { FC, useEffect, useLayoutEffect, useState } from 'react';

// Put a background image here that's in the slide and make a fade
// for the text which is a bit delayed compared to the background image
const InitialSection: FC = () => {
  const [rightPosition, setRightPosition] = useState(100);
  useLayoutEffect(() => {
    setRightPosition(0);
  }, []);

  return (
    <Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'secondary.main' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          right: `${rightPosition}vw`,
          transition: 'right 1380ms ease-out',
          position: 'absolute',
          objectFit: 'fill',
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw'
        }}>
        <source src="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/frontpage.mp4" />
      </video>
      <Content />
    </Box>
  );
};

const Content: FC = () => {
  const [opacity, setOpacity] = useState(0);
  useLayoutEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <Grid
      item
      container
      justifyContent="center"
      style={{ paddingTop: '26.7vh', opacity, transition: 'opacity 630ms ease-out 920ms' }}
      xs={12}>
      <Grid item>
        <FirstLineWithAnimation />
        <SecondLineWithAnimation />
        <ThirdLineWithAnimation />
      </Grid>
    </Grid>
  );
};

const lineEnterAnimation = { transition: 'margin-left 1010ms ease 690ms' };

// NB! Note that the below values does NOT fit with the Figma because the
// TextContainer adds 148px margin left

const FirstLineWithAnimation: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [marginLeft, setMarginLeft] = useState(-54.02);
  useLayoutEffect(() => {
    setMarginLeft(0);
  }, []);

  const normalizedScrollY = scrollY / 20;

  const unprotectedOpacity = 1 - normalizedScrollY / 100;
  const opacityUnderOne = Math.min(unprotectedOpacity, 0.9);
  const opacity = Math.max(opacityUnderOne, 0.1);

  return (
    <Typography
      color="primary.transparent"
      variant="PoppinsBig-h1"
      sx={{
        opacity,
        marginLeft: { xs: 2, sm: `${marginLeft}px` },
        transform: { sm: `translate(${normalizedScrollY}px)` },
        fontSize: { xs: 50, sm: 75, lg: 104 },
        ...lineEnterAnimation
      }}
      component="h1">
      Software development
    </Typography>
  );
};

const SecondLineWithAnimation: FC = () => {
  // TODO: Move this out into a shared utility hook once we are completely on top of the performance issues
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [marginLeft, setMarginLeft] = useState(418.52);
  useLayoutEffect(() => {
    setMarginLeft(354);
  }, []);

  const normalizedScrollY = scrollY / 10;

  const unprotectedOpacity = 1 - normalizedScrollY / 100;
  const opacityUnderOne = Math.min(unprotectedOpacity, 0.9);
  const opacity = Math.max(opacityUnderOne, 0.1);

  return (
    <Typography
      color="primary.transparent"
      variant="PoppinsBig-h1"
      sx={{
        opacity,
        marginLeft: { xs: 8, sm: `${marginLeft}px` },
        transform: { sm: `translate(-${normalizedScrollY}px)` },
        fontSize: { xs: 50, sm: 75, lg: 104 },
        ...lineEnterAnimation
      }}
      component="h1">
      crafted to fit
    </Typography>
  );
};

const ThirdLineWithAnimation: FC = () => {
  const [marginLeft, setMarginLeft] = useState(58.56);
  useLayoutEffect(() => {
    setMarginLeft(118);
  }, []);

  return (
    <Typography
      color="primary"
      variant="TobiasBig-h1"
      component="h1"
      sx={{
        marginLeft: { xs: 2, sm: `${marginLeft}px` },
        position: 'relative',
        fontSize: { xs: 50, sm: 75, lg: 120 },
        ...lineEnterAnimation
      }}>
      your workflow.
    </Typography>
  );
};

export default InitialSection;
