import { Grid, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import HeadlineSection from '../components/sections/HeadlineSection';
import TextContainer from '../components/TextContainer';
import calculateOpacity from '../utilities/calculateOpacity';
import useIsMobile from '../utilities/useIsMobile';

const PurposePageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const [textSectionOpacity, setTextSectionOpacity] = useState(0);

  useEffect(() => {
    const updateOpacity = () => {
      const newTextSectionOpacity = calculateOpacity(
        containerRef,
        isMobile ? 30 : 80,
        isMobile ? 2 : 3
      );

      setTextSectionOpacity(newTextSectionOpacity);
    };

    window.addEventListener('scroll', updateOpacity);
    return () => window.removeEventListener('scroll', updateOpacity);
  }, []);

  return (
    <Grid
      item
      xs={12}
      sx={{ paddingTop: { xs: 5, md: 32 } }}
      justifyContent="flex-start"
      ref={containerRef}>
      <TextContainer>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'What we do', color: 'secondary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'different', color: 'secondary.transparent', variant: 'PoppinsBig-h1' }
          ]}
        />
        <Typography
          sx={{ marginTop: { xs: 5, md: 10 }, maxWidth: '500px', opacity: textSectionOpacity }}
          variant="PoppinsBig-subtitle2"
          color="secondary.main">
            We reuse project setup and generic functionality, saving months of initial development time.<br />
            We have a clear, structured process to define the functionality of your system which allows us to collaborate more effectively and better understand your business' needs.<br />
            We have automated repetitive work and streamlined our processes.
            <p>
            As a result, we are able to build fully customised, high quality solutions 
            at a much more accessible price than what has previously been possible
            </p>
        </Typography>
      </TextContainer>
    </Grid>
  );
};

export default PurposePageTeaserSection;
