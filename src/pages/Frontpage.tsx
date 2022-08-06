import { Fade, Slide, Typography, TypographyProps } from '@mui/material';
import { FC, forwardRef, useEffect, useState } from 'react';
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
      <Fade in timeout={680} style={{ transitionDelay: '820ms' }}>
        <FrontpageContent />
      </Fade>
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

  console.log(scrollY);

  return (
    <div ref={ref} style={style}>
      <TextContainer style={{ paddingTop: '26.7vh' }}>
        <Typography
          color="primary.transparent"
          variant="PoppinsBig-h1"
          sx={{ transform: `translate(${scrollY / 10}px)` }}
          component="h1">
          Software development
        </Typography>
        <Typography
          color="primary.transparent"
          variant="PoppinsBig-h1"
          sx={{ ml: '354px', transform: `translate(-${scrollY / 10}px)` }}
          component="h1">
          crafted to fit
        </Typography>
        <Typography color="primary" variant="TobiasBig-h1" component="h2" sx={{ ml: '118px' }}>
          your workflow.
        </Typography>
      </TextContainer>
    </div>
  );
});

export default Frontpage;
