import { Box, Grid, keyframes, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

const LoadingLogo: FC = ({ children }) => {
  const [backgroundContainerRightPosition, setBackgroundContainerRightPosition] = useState(100);
  const [textContainerOpacity, setTextContainerOpacity] = useState(1);
  const [newPageOpacity, setNewPageOpacity] = useState(0);

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
        xs={5}
        sx={{
          textAlign: 'left',
          opacity: textContainerOpacity,
          transition: 'opacity 300ms ease 1400ms',
          zIndex: 1
        }}>
        <Typography
          variant="PoppinsBig-h1"
          color="text.secondary"
          sx={{
            animation: `${topTextAnimation} 3000ms cubic-bezier(0.42, 0, 0.58, 1)`,
            display: 'block'
          }}>
          the
        </Typography>
        <Typography
          variant="TobiasBig-h1"
          color="text.secondary"
          sx={{
            animation: `${middleTextAnimation} 3000ms cubic-bezier(0.42, 0, 0.58, 1)`,
            display: 'block'
          }}>
          moss
        </Typography>
        <Typography
          variant="PoppinsBig-h1"
          color="text.secondary"
          sx={{
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
          backgroundColor: 'white',
          zIndex: 2,
          transition: 'right 1100ms ease 1400ms'
        }}>
        <Box sx={{ opacity: newPageOpacity, transition: 'opacity 620ms ease 2070ms' }}>
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
