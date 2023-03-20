import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import HeadlineSection from '../components/sections/HeadlineSection';
import TextContainer from '../components/TextContainer';
import InteractiveLink from '../components/InteractiveLink';
import useAppearingText from '../utilities/useAppearingText';
import PeopleTalkingImage from '../public/images/people_talking.jpg';
import CollaborationImage from '../public/images/collaboration.jpg';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useIsMobile from '../utilities/useIsMobile';

const PartnershipPageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const firstTextOpacity = useAppearingText(containerRef, 100, 4);
  const secondTextOpacity = useAppearingText(containerRef, 140, 4);
  const linkOpacity = useAppearingText(containerRef, 180, 4);

  const isMobile = useIsMobile();

  return (
    <Grid
      container
      item
      xs={12}
      ref={containerRef}
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        paddingTop: { xs: 5, md: 32 }
      }}>
      <Grid item sx={{ marginLeft: { xs: 4, md: 30 }, marginBottom: { xs: 5, md: 10 } }} xs={12}>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'A committed', color: 'primary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'partnership', color: 'primary.transparent', variant: 'PoppinsBig-h1' },
            { text: 'with you', color: 'primary.main', variant: 'TobiasBig-h1' }
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
              We build close and long lasting partnerships characterized by trust and respect. Our
              work is iterative, and we change and adapt based on your needs and feedback.
            </Typography>
          </TextContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={PeopleTalkingImage}
            style={{ width: '100%', height: 'auto' }}
            alt="People talking"
            priority
          />
        </Grid>
      </Grid>
      <Grid container spacing={isMobile ? 5 : 19}>
        <Grid item xs={12} md={6}>
          <Image
            src={CollaborationImage}
            style={{ width: '100%', height: 'auto' }}
            alt="People collaborating around a screen"
            priority
          />
        </Grid>
        <Grid item xs={12} md={6} alignSelf="center">
          <TextContainer textPosition="right">
            <Typography
              color="primary.main"
              variant="PoppinsBig-subtitle2"
              sx={{ opacity: secondTextOpacity }}>
              We always strive to provide more than just highly stable and flexible software. We are
              experts in translating business processes and workflows into software that supports
              your work in the best way possible.
            </Typography>
          </TextContainer>
          <InteractiveLink
            text="Read more about what it is like to work with us"
            color="primary.transparent"
            variant="PoppinsSmall-button"
            navigate={() => router.push('/partnership')}
            sx={{
              marginTop: { xs: 5, md: 10 },
              marginLeft: { xs: 4, md: 0 },
              opacity: linkOpacity
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PartnershipPageTeaserSection;
