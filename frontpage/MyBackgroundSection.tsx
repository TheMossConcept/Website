import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  return (
    <Grid
      item
      container
      spacing={2}
      xs={12}
      sx={{ py: { xs: 5, lg: 32 }, px: { xs: 2.5, sm: 10 } }}
      justifyContent="flex-start"
      alignItems='center'
      ref={containerRef}
    >
      <Grid item md={4} xs={12}>
        <MediaSection mediaLocation="left" mediaItems={[{ mediaUrl: ImageOfNiklas, imageDimensions: { width: '400px', height: 'auto' } }]} marginTop={2} />
      </Grid>
      <Grid item md={8} alignSelf="center">
      <TextContainer>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'Niklas Moss', color: 'secondary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'IT Engineer', color: 'secondary.transparent', variant: 'PoppinsBig-h1' }
          ]}
        />
        <Typography
          sx={{ marginTop: { xs: 5, md: 10 }, opacity: textSectionOpacity }}
          variant="PoppinsBig-subtitle2"
          color="secondary.main">
          With an M.Sc. in Computer Science, I have a total of 12 years of experience delivering complex digital platforms for 
          clients across both start-ups, scale-ups, and large enterprise organisations. 
          <p>
          Through The Moss Concept, I have used my knowledge and experience to create a software system that streamlines the creation of 
          customised software. 
          </p>
          <p>
          We build advanced systems like the ones that have long been standard in large corporations, however, 
          we are able to make them accessible to start-ups as well as small and mid-sized companies.
          </p>
          <p>
          Throughout the years, we have worked with clients from retail, marketing, and manufacturing, all the way to the dairy and healthcare industries.
          Along the way, we have built a solid library of reuseable functionality which we use along with optimised processes to build 
          quality, customised software systems efficiently.
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
        mt={{ xs: 5, md: 32}}
      />
    </Grid>
  );
};

export default BackgroundSection;
