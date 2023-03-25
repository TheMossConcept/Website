import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import InteractiveLink from '../components/InteractiveLink';
import HeadlineSection from '../components/sections/HeadlineSection';
import TextContainer from '../components/TextContainer';
import useAppearingText from '../utilities/useAppearingText';
import useIsMobile from '../utilities/useIsMobile';

const PurposePageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const textSectionOpacity = useAppearingText(containerRef, isMobile ? 30 : 80, 4);
  const linkOpacity = useAppearingText(containerRef, isMobile ? 42.5 : 95, 4);

  const router = useRouter();

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
          firstLineText={[{ text: 'Our deeper', color: 'secondary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'purpose', color: 'secondary.transparent', variant: 'PoppinsBig-h1' }
          ]}
        />
        <Typography
          sx={{ marginTop: { xs: 5, md: 10 }, maxWidth: '500px', opacity: textSectionOpacity }}
          variant="PoppinsBig-subtitle2"
          color="secondary.main">
          We strongly believe that doing anything that is not rooted in meaning and a purpose from
          deep within can only be done half-heartedly. That is why The Moss Concept is rooted in a
          deep purpose.
        </Typography>
        <InteractiveLink
          text="Read more about our underlying purpose"
          navigate={() => router.push('/purpose')}
          variant="PoppinsSmall-button"
          color="secondary.transparent"
          sx={{ marginTop: { xs: 5, md: 10 }, opacity: linkOpacity }}
        />
      </TextContainer>
    </Grid>
  );
};

export default PurposePageTeaserSection;
