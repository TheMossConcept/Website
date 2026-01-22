import { Grid, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import HeadlineSection from '../components/sections/HeadlineSection';
import TextContainer from '../components/TextContainer';
import calculateOpacity from '../utilities/calculateOpacity';
import PeopleTalkingImage from '../public/images/people_talking.jpg';
import CollaborationImage from '../public/images/collaboration.jpg';
import useIsMobile from '../utilities/useIsMobile';
import MediaSection from '../components/sections/MediaSection';

const PartnershipPageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const [firstTextOpacity, setFirstTextOpacity] = useState(0);
  const [secondTextOpacity, setSecondTextOpacity] = useState(0);

  useEffect(() => {
    const updateOpacity = () => {
      const newFirstTextOpacity = calculateOpacity(
        containerRef,
        isMobile ? 70 : 100,
        isMobile ? 2 : 3
      );
      const newSecondTextOpacity = calculateOpacity(
        containerRef,
        isMobile ? 110 : 140,
        isMobile ? 2 : 3
      );

      setFirstTextOpacity(newFirstTextOpacity);
      setSecondTextOpacity(newSecondTextOpacity);
    };

    window.addEventListener('scroll', updateOpacity);
    return () => {
      window.removeEventListener('scroll', updateOpacity);
    };
  }, []);

  return (
    <Grid
      container
      item
      xs={12}
      ref={containerRef}
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        paddingTop: { xs: 5, md: 5 }
      }}>
      <Grid item sx={{ marginLeft: { xs: 4, md: 30 }, marginBottom: { xs: 5, md: 10 } }} xs={12}>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'Optimisations enable', color: 'primary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'new possibilities', color: 'primary.transparent', variant: 'PoppinsBig-h1' },
          ]}
        />
      </Grid>
      <Grid
        container
        spacing={isMobile ? 5 : 19}
        sx={{ marginBottom: { xs: 5, md: 10 } }}
        direction={isMobile ? 'column-reverse' : 'row'}>
        <Grid item xs={12} md={6} alignSelf="center">
          <TextContainer>
            <Typography
              color="primary.main"
              variant="PoppinsBig-subtitle2"
              sx={{ opacity: firstTextOpacity }}>
              For the Danish luxury furniture manufacturer Houe, we developed a system to track plastic to be turned into chairs.
              The system enabled customers to book plastic collection directly with Houe's collection partner, and to view their collection progress. 
              <p>
              It also enabled Houe's customers and Houe's three partners to work together seamlessly without manual involvement from Houe. It also included complete
              tracking of the plastic throughout the whole process from collection to the finished chairs.
              </p>
            </Typography>
          </TextContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaSection
            mediaUrl={PeopleTalkingImage}
            mediaLocation="full-screen"
            marginTop={0}
            imageDimensions={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={isMobile ? 5 : 19}>
        <Grid item xs={12} md={6}>
          <MediaSection
            mediaUrl={CollaborationImage}
            mediaLocation="full-screen"
            imageDimensions={{ width: '100%', height: 'auto' }}
            marginTop={0}
          />
        </Grid>
        <Grid item xs={12} md={6} alignSelf="center">
          <TextContainer textPosition="right">
            <Typography
              color="primary.main"
              variant="PoppinsBig-subtitle2"
              sx={{ opacity: secondTextOpacity }}>
              We have automated repetitive work and streamlined our processes.
              <p>As a result, we are able to develop fully customised, high quality solutions 
              at a much more accessible price than what has previously been possible.</p>
            </Typography>
          </TextContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PartnershipPageTeaserSection;
