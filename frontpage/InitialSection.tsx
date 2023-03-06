import { Box, Typography, Grid } from '@mui/material';
import { FC, useContext, useLayoutEffect, useState } from 'react';
import { ScrollContext } from '../utilities/useYScroll';

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
          width: '100vw'
          // We want this to be below everything else!
        }}>
        <source
          src="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/frontpage.mp4"
          type="video/mp4"
        />
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
  const scrollY = useContext(ScrollContext);

  const [marginLeft, setMarginLeft] = useState(-54.02);
  useLayoutEffect(() => {
    setMarginLeft(0);
  }, []);

  const normalizedScrollY = scrollY / 20;

  return (
    <Typography
      color="primary.transparent"
      variant="PoppinsBig-h1"
      style={{
        transform: `translate(${normalizedScrollY}px)`,
        marginLeft: `${marginLeft}px`,
        opacity: 1 - normalizedScrollY / 100,
        ...lineEnterAnimation
      }}
      component="h1">
      Software development
    </Typography>
  );
};

const SecondLineWithAnimation: FC = () => {
  const scrollY = useContext(ScrollContext);

  const [marginLeft, setMarginLeft] = useState(418.52);
  useLayoutEffect(() => {
    setMarginLeft(354);
  }, []);

  const normalizedScrollY = scrollY / 10;

  return (
    <Typography
      color="primary.transparent"
      variant="PoppinsBig-h1"
      style={{
        marginLeft: `${marginLeft}px`,
        transform: `translate(-${normalizedScrollY}px)`,
        opacity: 1 - normalizedScrollY / 100,
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
      style={{ marginLeft: `${marginLeft}px`, position: 'relative', ...lineEnterAnimation }}>
      your workflow.
    </Typography>
  );
};

export default InitialSection;
