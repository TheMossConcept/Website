import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import { useNavigate } from 'react-router';
import InteractiveLink from '../../components/InteractiveLink';
import HeadlineSection from '../../components/sections/HeadlineSection';
import TextContainer from '../../components/TextContainer';

const FourthSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  return (
    <Grid item xs={10} sx={{ pt: 32 }} ref={containerRef}>
      <TextContainer>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'Our deeper', color: 'secondary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'purpose', color: 'secondary.transparent', variant: 'PoppinsBig-h1' }
          ]}
        />
        <Typography
          sx={{ mt: 10, width: '38%' }}
          variant="PoppinsBig-subtitle2"
          color="secondary.main">
          We strongly believe that doing anything that is not rooted in meaning and a purpose from
          deep within can only be done half-heartedly. That is why The Moss Concept is rooted in a
          deep purpose.
        </Typography>
        <InteractiveLink
          text="Learn more about our underlying purpose"
          navigate={() => navigate('/purpose')}
          variant="PoppinsSmall-button"
          color="secondary.transparent"
          sx={{ marginTop: 10 }}
        />
      </TextContainer>
    </Grid>
  );
};

export default FourthSection;
