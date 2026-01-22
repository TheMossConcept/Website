import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import InteractiveLink from '../components/InteractiveLink';
import CollaborationImage from '../public/images/collaboration.jpg';
import HeadlineSection from '../components/sections/HeadlineSection';
import MediaSection from '../components/sections/MediaSection';
import TextContainer from '../components/TextContainer';
import calculateOpacity from '../utilities/calculateOpacity';
import useIsMobile from '../utilities/useIsMobile';

const BackgroundSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const [textSectionOpacity, setTextSectionOpacity] = useState(0);
  const [linkOpacity, setLinkOpacity] = useState(0);

  useEffect(() => {
    const updateOpacity = () => {
      const newTextSectionOpacity = calculateOpacity(
        containerRef,
        isMobile ? 30 : 80,
        isMobile ? 2 : 3
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
      sx={{ paddingTop: { xs: 5 } }}
      justifyContent="flex-start"
      ref={containerRef}
    >
      <Grid item md={4}>
        <MediaSection style={{ paddingLeft: '74px' }} mediaLocation="left" mediaUrl={CollaborationImage} imageDimensions={{ width: '750px', height: 'auto' }} />
      </Grid>
      <Grid item md={8} alignSelf="center">
      <TextContainer style={{ paddingRight: '74px' }}>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'Niklas Moss', color: 'secondary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'Tech lead', color: 'secondary.transparent', variant: 'PoppinsBig-h1' }
          ]}
        />
        <Typography
          sx={{ marginTop: { xs: 5, md: 10 }, opacity: textSectionOpacity }}
          variant="PoppinsBig-subtitle2"
          color="secondary.main">
          With an M.Sc. in Computer Science, I have a total of 12 years of experience delivering high-complexity digital platforms for 
          clients across both start-ups, scale-ups, and large enterprise organisations. 
          <p>
          I started The Moss Concept to use my knowledge and experience to create a highly optimised environment for software development.
          </p>
          <p>
          Throughout the years, I have worked with clients from retail, marketing, and manufacturing, all the way to the dairy and healthcare industries.
          Along the way, I have built a solid library of reuseable functionality which I use along with highly optimised processes to build 
          high quality, customised software systems very efficiently.
          </p>
        </Typography>
        <InteractiveLink
          text="View my LinkedIn profile for more details"
          navigate={() => router.push('/purpose')}
          variant="PoppinsSmall-button"
          color="secondary.transparent"
          sx={{ marginTop: { xs: 5, md: 10 }, opacity: linkOpacity }}
        />
      </TextContainer>
      </Grid>
    </Grid>
  );
};

export default BackgroundSection;
