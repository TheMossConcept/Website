import { Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import TextContainer from '../components/TextContainer';

type FrontpageProps = Pick<FrontpageContentProps, 'scrollY'>;

// Put a background image here that's in the slide and make a fade
// for the text which is a bit delayed compared to the background image
const Frontpage: FC<FrontpageProps> = ({ scrollY }) => {
  const [rightPosition, setRightPosition] = useState(100);
  useEffect(() => {
    setRightPosition(0);
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <img
        src="https://cdn.pixabay.com/photo/2021/09/07/11/09/ocean-6603623_1280.jpg"
        style={{
          height: '100vh',
          width: `100vw`,
          right: `${rightPosition}vw`,
          transition: 'right 1380ms ease-out',
          position: 'absolute',
          // We want this to be below everything else!
          zIndex: -1
        }}
      />
      <FrontpageContent scrollY={scrollY} />
    </div>
  );
};

type FrontpageContentProps = Pick<MoveableLineProps, 'scrollY'>;

const FrontpageContent: FC<FrontpageContentProps> = ({ scrollY }) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <TextContainer
      style={{ paddingTop: '26.7vh', opacity, transition: 'opacity 630ms ease-out 920ms' }}>
      <FirstLineWithAnimation scrollY={scrollY} />
      <SecondLineWithAnimation scrollY={scrollY} />
      <ThirdLineWithAnimation />
    </TextContainer>
  );
};

const lineEnterAnimation = { transition: 'margin-left 1010ms ease 690ms' };

type MoveableLineProps = { scrollY: number };

// NB! Note that the below values does NOT fit with the Figma because the
// TextContainer adds 148px margin left

const FirstLineWithAnimation: FC<MoveableLineProps> = ({ scrollY }) => {
  const [marginLeft, setMarginLeft] = useState(-54.02);
  useEffect(() => {
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

const SecondLineWithAnimation: FC<MoveableLineProps> = ({ scrollY }) => {
  const [marginLeft, setMarginLeft] = useState(418.52);
  useEffect(() => {
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
  useEffect(() => {
    setMarginLeft(118);
  }, []);

  return (
    <Typography
      color="primary"
      variant="TobiasBig-h1"
      component="h2"
      style={{ marginLeft: `${marginLeft}px`, ...lineEnterAnimation }}>
      your workflow.
    </Typography>
  );
};

export default Frontpage;
