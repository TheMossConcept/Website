import { Button, Fade, Slide, Typography, TypographyProps } from '@mui/material';
import { FC, forwardRef, useEffect, useRef, useState } from 'react';
import TextContainer from '../components/TextContainer';

// Put a background image here that's in the slide and make a fade
// for the text which is a bit delayed compared to the background image
const Frontpage: FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Slide direction="right" timeout={{ enter: 1380 }} in mountOnEnter unmountOnExit>
        <img
          src="https://cdn.pixabay.com/photo/2021/09/07/11/09/ocean-6603623_1280.jpg"
          style={{ height: '100vh', width: '100%', position: 'absolute', zIndex: -1 }}
        />
      </Slide>
      {/*<Fade in mountOnEnter timeout={680} style={{ transitionDelay: '820ms' }}>*/}
      <FrontpageContent />
      {/*</Fade>*/}
    </div>
  );
};

type FrontpageContentProps = Pick<TypographyProps, 'style'>;

const FrontpageContent: FC<FrontpageContentProps> = forwardRef<
  HTMLHeadingElement,
  FrontpageContentProps
  /* eslint-disable-next-line react/prop-types */
>(function frontpageContent({ style }, ref) {
  const [scrollY, setScollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={style}>
      <TextContainer ref={textContainerRef} style={{ paddingTop: '26.7vh' }}>
        <FirstLineWithAnimation scrollY={scrollY} />
        <SecondLineWithAnimation scrollY={scrollY} />
        <ThirdLineWithAnimation />
      </TextContainer>
    </div>
  );
});

type MoveableLineProps = { scrollY: number };

// NB! Note that the below values does NOT fit with the Figma because the
// TextContainer adds 148px margin left

const FirstLineWithAnimation: FC<MoveableLineProps> = ({ scrollY }) => {
  const [marginLeft, setMarginLeft] = useState(-54.02);
  useEffect(() => {
    setMarginLeft(0);
  }, []);

  return (
    <Typography
      color="primary.transparent"
      variant="PoppinsBig-h1"
      style={{
        transition: 'margin-left 1010ms ease',
        transform: `translate(${scrollY / 10}px)`,
        marginLeft: `${marginLeft}px`
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

  return (
    <Typography
      color="primary.transparent"
      variant="PoppinsBig-h1"
      style={{
        marginLeft: `${marginLeft}px`,
        transition: 'margin-left 1010ms ease',
        transform: `translate(-${scrollY / 10}px)`
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
      style={{ marginLeft: `${marginLeft}px`, transition: 'margin-left 1010ms ease' }}>
      your workflow.
    </Typography>
  );
};

export default Frontpage;
