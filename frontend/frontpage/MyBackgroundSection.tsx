import { Grid, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import InteractiveLink from '../components/InteractiveLink';
import ImageOfNiklas from '../public/images/niklas.jpg';
import HeadlineSection from '../components/sections/HeadlineSection';
import MediaSection from '../components/sections/MediaSection';
import TextContainer from '../components/TextContainer';
import calculateOpacity from '../utilities/calculateOpacity';
import useIsMobile from '../utilities/useIsMobile';
import MainPointSection from '../components/sections/MainPointSection';

const BackgroundSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const [textSectionOpacity, setTextSectionOpacity] = useState(0);
  const [linkOpacity, setLinkOpacity] = useState(0);

  useEffect(() => {
    const updateOpacity = () => {
      const newTextSectionOpacity = calculateOpacity(
        containerRef,
        isMobile ? 200 : 80,
        isMobile ? 1.5 : 3
      );
      const newLinkOpacity = calculateOpacity(containerRef, isMobile ? 42.5 : 95, isMobile ? 2 : 3);

      setTextSectionOpacity(newTextSectionOpacity);
      setLinkOpacity(newLinkOpacity);
    };

    window.addEventListener('scroll', updateOpacity);
    return () => window.removeEventListener('scroll', updateOpacity);
  }, []);

  return (
    <Grid
      item
      container
      spacing={2}
      xs={12}
      sx={{ py: { xs: 5, lg: 32 }, px: { xs: 2.5, sm: 10 } }}
      justifyContent="flex-start"
      alignItems="center"
      ref={containerRef}>
      <Grid item md={4} xs={12}>
        <MediaSection
          mediaLocation="left"
          mediaItems={[
            { mediaUrl: ImageOfNiklas, imageDimensions: { width: '400px', height: 'auto' } }
          ]}
          marginTop={2}
        />
      </Grid>
      <Grid item md={8} alignSelf="center">
        <TextContainer>
          <HeadlineSection
            containerRef={containerRef}
            firstLineText={[
              { text: 'Niklas Moss', color: 'secondary.main', variant: 'TobiasBig-h1' }
            ]}
            secondLineText={[
              { text: 'IT Engineer', color: 'secondary.transparent', variant: 'PoppinsBig-h1' }
            ]}
          />
          <Typography
            sx={{ marginTop: { xs: 5, md: 10 }, opacity: textSectionOpacity }}
            variant="PoppinsBig-subtitle2"
            color="secondary.main">
            With an M.Sc. in Computer Science and since then, 12 years of experience in the software
            industry, I have delivered complex digital platforms for clients across both start-ups,
            scale-ups, and large enterprise organisations.
            <p>
              My partner and I founded The Moss Concept because we wanted to make these systems
              available outside large corporations and well-funded startups.
            </p>
            <p>
              Throughout the years, we have worked with clients from various industries, including
              retail, marketing, manufacturing, as well as dairy and healthcare. Along the way, we
              have built a library of reusable functionality which we use together with our own
              optimised processes to build quality, customised software systems.
            </p>
          </Typography>
          <InteractiveLink
            text="View my LinkedIn profile for more details"
            navigate={() => window.open('https://www.linkedin.com/in/niklas-moss/', '_blank')}
            variant="PoppinsSmall-button"
            color="secondary.transparent"
            sx={{ marginTop: { xs: 5, md: 10 }, opacity: linkOpacity }}
          />
        </TextContainer>
      </Grid>
      <MainPointSection
        initialText="We make enterprise-grade software systems accessible to start-ups, small, and mid-sized companies"
        mt={{ xs: 5, md: 32 }}
      />
    </Grid>
  );
};

export default BackgroundSection;
