import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import HeadlineSection from '../../components/sections/HeadlineSection';
import TextContainer from '../../components/TextContainer';
import CollaborationImage from '/images/collaboration.jpg';
import PeopleTalkingImage from '/images/people_talking.jpg';
import InteractiveLink from '../../components/InteractiveLink';
import { useNavigate } from 'react-router';
import useAppearingText from '../../utilities/useAppearingText';

const PartnershipPageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const firstTextOpacity = useAppearingText(containerRef, 100, 4);
  const secondTextOpacity = useAppearingText(containerRef, 140, 4);
  const linkOpacity = useAppearingText(containerRef, 180, 4);

  return (
    <Grid
      container
      item
      xs={12}
      ref={containerRef}
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        pt: 32
      }}>
      <Grid item sx={{ ml: 30, mb: 10 }} xs={12}>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'A committed', color: 'primary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'partnership', color: 'primary.transparent', variant: 'PoppinsBig-h1' },
            { text: 'with you', color: 'primary.main', variant: 'TobiasBig-h1' }
          ]}
        />
      </Grid>
      <Grid container spacing={19} sx={{ mb: 10 }}>
        <Grid item xs={6} alignSelf="center">
          <TextContainer>
            <Typography
              color="primary.main"
              variant="PoppinsBig-subtitle2"
              sx={{ opacity: firstTextOpacity }}>
              We build close and long lasting partnerships characterized by trust and respect. Our
              work is iterative and we change and adapt based on your needs and feedback.
            </Typography>
          </TextContainer>
        </Grid>
        <Grid item xs={6}>
          <img src={PeopleTalkingImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <Grid container spacing={19}>
        <Grid item xs={6}>
          <img src={CollaborationImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} alignSelf="center">
          <TextContainer textPosition="right">
            <Typography
              color="primary.main"
              variant="PoppinsBig-subtitle2"
              sx={{ opacity: secondTextOpacity }}>
              We always strive to provide more than just highly stable and flexible software. We are
              experts in translating business processes and workflows into software that supports
              your work in the best possible way.
            </Typography>
          </TextContainer>
          <InteractiveLink
            text="Read more about what it is like to work with us"
            color="primary.transparent"
            variant="PoppinsSmall-button"
            navigate={() => navigate('/partnership')}
            sx={{ marginTop: 10, opacity: linkOpacity }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PartnershipPageTeaserSection;
