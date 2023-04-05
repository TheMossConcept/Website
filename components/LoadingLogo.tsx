import { Box, Grid, keyframes, Typography } from '@mui/material';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

const LoadingLogo: FC<PropsWithChildren> = ({ children }) => {
  const initialBackgroundContainerRightPosition = 100;
  const initialTextContainerOpacity = 1;
  const initialNewPageOpacity = 0;

  const [backgroundContainerRightPosition, setBackgroundContainerRightPosition] = useState(
    initialBackgroundContainerRightPosition
  );
  const [textContainerOpacity, setTextContainerOpacity] = useState(initialTextContainerOpacity);
  const [newPageOpacity, setNewPageOpacity] = useState(initialNewPageOpacity);

  useEffect(() => {
    setBackgroundContainerRightPosition(0);
    setTextContainerOpacity(0);
    setNewPageOpacity(1);
  }, []);

  return (
    <Grid
      container
      color="primary"
      alignContent="center"
      justifyContent="center"
      sx={{ height: '100vh' }}>
      <Grid
        item
        sx={{
          textAlign: 'left',
          opacity: textContainerOpacity,
          transition: 'opacity 300ms ease 2400ms',
          zIndex: 'modal'
        }}>
        <Typography
          variant="PoppinsBig-h1"
          color="text.secondary"
          sx={{
            fontSize: { xs: 50, sm: 105 },
            animation: `${topTextAnimation} 3000ms cubic-bezier(0.42, 0, 0.58, 1)`,
            display: 'block'
          }}>
          the
        </Typography>
        <Typography
          variant="TobiasBig-h1"
          color="text.secondary"
          sx={{
            fontSize: { xs: 50, sm: 120 },
            animation: `${middleTextAnimation} 3000ms cubic-bezier(0.42, 0, 0.58, 1)`,
            display: 'block'
          }}>
          moss
        </Typography>
        <Typography
          variant="PoppinsBig-h1"
          color="text.secondary"
          sx={{
            fontSize: { xs: 50, sm: 105 },
            animation: `${bottomTextAnimation} 3000ms cubic-bezier(0.42, 0, 0.58, 1)`,
            display: 'block'
          }}>
          concept
        </Typography>
      </Grid>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          right: `${backgroundContainerRightPosition}vw`,
          backgroundColor: 'primary.main',
          transition: 'right 1050ms ease'
        }}
      />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          right: `${backgroundContainerRightPosition}vw`,
          bgcolor: 'text.secondary',
          transition: 'right 1100ms ease 2475ms'
        }}>
        <Box
          sx={{
            opacity: newPageOpacity,
            transition: 'opacity 620ms ease 3170ms'
          }}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};

const topTextAnimation = keyframes`
  0% {
    margin-left: 173px
  }
  33% {
    margin-left: 0px
  }
  66% {
    margin-left: 223px
  }
  100% {
    margin-left: 173px 
  }
`;

const middleTextAnimation = keyframes`
  0% {
    margin-left: 0px
  }
  33% {
    margin-left: 0px
  }
  66% {
    margin-left: 173px
  }
  100% {
    margin-left: 0px 
  }
`;

const bottomTextAnimation = keyframes`
  0% {
    margin-left: 174px
  }
  33% {
    margin-left: 0px
  }
  66% {
    margin-left: 87px
  }
  100% {
    margin-left: 174px 
  }
`;

export default LoadingLogo;
