import { Box, Typography, Grid } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const VIDEO_SOURCE = 'https://stream.mux.com/7SBNtnJf3KgttWIT2YKHINhAf2ydA8vEt6GoghZXJLo.m3u8';

// Put a background image here that's in the slide and make a fade
// for the text which is a bit delayed compared to the background image
const InitialSection: FC = () => {
  const videoPlayerRef = useRef<HTMLVideoElement>(null)
  const [rightPosition, setRightPosition] = useState(-100);

  useEffect(() => {
    const videoPlayer = videoPlayerRef.current
    if (!videoPlayer) return;

    let hls;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(VIDEO_SOURCE);
      hls.attachMedia(videoPlayer);
    }
  }, [videoPlayerRef]);

  useEffect(() => {
    setRightPosition(0);
  }, []);

  return (
    <Box sx={{ height: '100vh', width: '100vw', bgcolor: 'text.secondary' }}>
      {/*
    <iframe
      src="https://player.mux.com/hQlLzL02NzB3urxeHLxJs4lA02IzdxZSCGcDicyY99uHY?metadata-video-title=frontpage&video-title=frontpage&autoplay=1&mute=1"
      ref={playerRef}
      style={{
        transform: `translateX(${rightPosition}vw)`,
        transition: 'transform 1380ms ease-out',
        position: 'absolute',
        objectFit: 'fill',
        maxHeight: '100vh',
        height: '100vh',
        width: '100vw',
        border: 'none',
        pointerEvents: 'none'
      }}
      allow="autoplay"
      allowFullScreen
    ></iframe>
    */}
      <video
        ref={videoPlayerRef}
        autoPlay
        loop
        muted
        preload="auto"
        style={{
          transform: `translateX(${rightPosition}vw)`,
          transition: 'transform 1380ms ease-out',
          position: 'absolute',
          objectFit: 'fill',
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw'
        }}>
        <source src={VIDEO_SOURCE} type="video/mp4" />
      </video>
      <Content />
    </Box>
  );
};

const Content: FC = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <Grid
      item
      container
      justifyContent="center"
      style={{
        paddingTop: '30vh',
        marginTop: '50px',
        opacity,
        transition: 'opacity 630ms ease-out 920ms'
      }}
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
  useEffect(() => {
    setMarginLeft(80);
  }, []);

  const normalizedScrollY = scrollY / 20;

  return (
    <Typography
      color="rgba(97, 145, 254, 0.65)"
      variant="TobiasBig-h1"
      sx={{
        marginLeft: { xs: 3, sm: `${marginLeft}px` },
        transform: { sm: `translate(${normalizedScrollY}px)` },
        lineHeight: '100%',
        fontWeight: 1,
        position: 'relative',
        fontSize: { xs: 40, sm: 75, lg: 104 },

        ...lineEnterAnimation
      }}
      component="h1">
      Software systems
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
  useEffect(() => {
    setMarginLeft(354);
  }, []);

  const normalizedScrollY = scrollY / 10;

  return (
    <Typography
      color="rgba(97, 145, 254, 0.65)"
      variant="TobiasBig-h1"
      sx={{
        marginLeft: { xs: 8, sm: `${marginLeft}px` },
        transform: { sm: `translate(-${normalizedScrollY}px)` },
        lineHeight: '100%',
        position: 'relative',
        fontSize: { xs: 40, sm: 75, lg: 104 },
        ...lineEnterAnimation
      }}
      component="h1">
      crafted to fit
    </Typography>
  );
};

const ThirdLineWithAnimation: FC = () => {
  const [marginLeft, setMarginLeft] = useState(58.56);
  useEffect(() => {
    setMarginLeft(40);
  }, []);

  return (
    <Typography
      color="#3462c9"
      variant="TobiasBig-h1"
      component="h1"
      sx={{
        marginLeft: { xs: 2, sm: `${marginLeft}px` },
        position: 'relative',
        fontSize: { xs: 40, sm: 75, lg: 104 },
        ...lineEnterAnimation
      }}>
      your company
    </Typography>
  );
};

export default InitialSection;
