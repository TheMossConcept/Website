import { Box, Typography, Grid } from '@mui/material';
import FrontpageVideo from './FrontpageVideo';
import FrontpageThumbnail from '../public/images/frontpage_thumbnail.png';
import { FC, useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const VIDEO_SOURCE = 'https://stream.mux.com/7SBNtnJf3KgttWIT2YKHINhAf2ydA8vEt6GoghZXJLo.m3u8';

// Put a background image here that's in the slide and make a fade
// for the text which is a bit delayed compared to the background image
const InitialSection: FC = () => {
  const videoPlayerRef = useRef<HTMLVideoElement>(null)

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


  return (
    <Box sx={{ height: '100vh', width: '100vw', bgcolor: 'text.secondary' }}>
      <FrontpageVideo src={VIDEO_SOURCE} posterImage={FrontpageThumbnail} />
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
    <>
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
      <TrustedBySection opacity={opacity} />
    </>
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
        fontSize: { xs: 30, sm: 65, lg: 84 },

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
        fontSize: { xs: 30, sm: 55, lg: 84 },
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
        fontSize: { xs: 30, sm: 55, lg: 84 },
        ...lineEnterAnimation
      }}>
      your company
    </Typography>
  );
};

const TrustedBySection: FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        padding: { xs: '24px 16px', sm: '32px 24px', md: '40px 48px' },
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)',
        // backdropFilter: 'blur(8px)',
        opacity,
        transition: 'opacity 800ms ease-out 1200ms'
      }}>
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          justifyItems: 'center'
        }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            color: 'rgba(97, 145, 254, 0.85)',
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: { xs: '16px', sm: '20px' }
          }}>
          Our clients
        </Typography>
        <Grid
          container
          spacing={{ xs: 8 }}
          justifyContent="center"
          sx={{
            maxWidth: { xs: '100%', sm: '800px', md: '1200px' },
            margin: '0'
          }}>
          <Grid item xs={4} md={3}>
            <Box
              component="img"
              src="/images/icons/Bestseller.svg"
              alt="Bestseller"
              sx={{
                height: { xs: '10px', sm: '15px', md: '21px' },
                width: 'auto',
                maxWidth: { xs: '100px', sm: '120px', md: '140px' },
                filter: 'brightness(0) invert(1)',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.05)'
                }
              }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              component="img"
              src="/images/icons/Brandheroes.avif"
              alt="Brandheroes"
              sx={{
                height: { xs: '10px', sm: '15px', md: '21px' },
                width: 'auto',
                maxWidth: { xs: '100px', sm: '120px', md: '140px' },
                filter: 'brightness(0) invert(1)',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.05)'
                }
              }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              component="img"
              src="/images/icons/Houe.png"
              alt="Houe"
              sx={{
                height: { xs: '10px', sm: '15px', md: '21px' },
                width: 'auto',
                maxWidth: { xs: '100px', sm: '120px', md: '140px' },
                filter: 'brightness(0) invert(1)',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.05)'
                }
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InitialSection;
