import { Box, Typography, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';

// Put a background image here that's in the slide and make a fade
// for the text which is a bit delayed compared to the background image
const InitialSection: FC = () => {
  const [videoIsLoaded, setVideoIsLoaded] = useState(true);
  const [rightPosition, setRightPosition] = useState(-100);

  useEffect(() => {
    if (videoIsLoaded) {
      setRightPosition(0);
    }
  }, [videoIsLoaded]);

  return (
    <Box sx={{ height: '100vh', width: '100vw', bgcolor: 'text.secondary' }}>
      <video
        autoPlay
        loop
        muted
        onCanPlay={() => {
          console.log('TRIGGERED ON CAN PLAY!');
          setVideoIsLoaded(true);
        }}
        style={{
          transform: `translateX(${rightPosition}vw)`,
          transition: 'transform 1380ms ease-out',
          position: 'absolute',
          objectFit: 'fill',
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw'
        }}>
        <source src="/videos/frontpage.mp4" />
      </video>
      <Content videoIsLoaded={videoIsLoaded} />
    </Box>
  );
};

type ContentProps = {
  videoIsLoaded: boolean;
};

const Content: FC<ContentProps> = ({ videoIsLoaded }) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if (videoIsLoaded) {
      setOpacity(1);
    }
  }, [videoIsLoaded]);

  return (
    <Grid
      item
      container
      justifyContent="center"
      style={{ paddingTop: '30vh', opacity, transition: 'opacity 630ms ease-out 920ms' }}
      xs={12}>
      <Grid item>
        <FirstLineWithAnimation videoIsLoaded={videoIsLoaded} />
        <SecondLineWithAnimation videoIsLoaded={videoIsLoaded} />
        <ThirdLineWithAnimation videoIsLoaded={videoIsLoaded} />
      </Grid>
    </Grid>
  );
};

const lineEnterAnimation = { transition: 'margin-left 1010ms ease 690ms' };

// NB! Note that the below values does NOT fit with the Figma because the
// TextContainer adds 148px margin left

const FirstLineWithAnimation: FC<ContentProps> = ({ videoIsLoaded }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [marginLeft, setMarginLeft] = useState(-54.02);
  useEffect(() => {
    if (videoIsLoaded) {
      setMarginLeft(0);
    }
  }, [videoIsLoaded]);

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

const SecondLineWithAnimation: FC<ContentProps> = ({ videoIsLoaded }) => {
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
  useEffect(() => {
    if (videoIsLoaded) {
      setMarginLeft(354);
    }
  }, [videoIsLoaded]);

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

const ThirdLineWithAnimation: FC<ContentProps> = ({ videoIsLoaded }) => {
  const [marginLeft, setMarginLeft] = useState(58.56);
  useEffect(() => {
    if (videoIsLoaded) {
      setMarginLeft(118);
    }
  }, [videoIsLoaded]);

  return (
    <Typography
      color="primary"
      variant="TobiasBig-h1"
      component="h1"
      sx={{
        marginLeft: { xs: 2, sm: `${marginLeft}px` },
        position: 'relative',
        fontSize: { xs: 50, sm: 75, lg: 104 },
        ...lineEnterAnimation
      }}>
      your workflow
    </Typography>
  );
};

export default InitialSection;
