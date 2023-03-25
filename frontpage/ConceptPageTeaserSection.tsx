import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import TextContainer from '../components/TextContainer';
import useAppearingText from '../utilities/useAppearingText';
import MediaSection from '../components/sections/MediaSection';
import HeadlineSection from '../components/sections/HeadlineSection';
import InteractiveLink from '../components/InteractiveLink';
import { useRouter } from 'next/router';
import useIsMobile from '../utilities/useIsMobile';

const ConceptPageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const firstTextSectionOpacity = useAppearingText(containerRef, isMobile ? 50 : 82.5, 4);
  const secondTextSectionOpacity = useAppearingText(containerRef, isMobile ? 60 : 87.5, 4);
  const linkOpacity = useAppearingText(containerRef, isMobile ? 70 : 92.5, 4);

  const router = useRouter();

  return (
    <Grid
      item
      container
      xs={12}
      ref={containerRef}
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        height: isMobile ? '1200px' : '1455px',
        paddingTop: { xs: 5, md: 32 },
        marginBottom: { xs: 0, md: 46 },
        backgroundColor: 'secondary.main'
      }}>
      <TextContainer>
        <HeadlineSection
          containerRef={containerRef}
          marginLeft={isMobile ? undefined : '354px'}
          firstLineText={[
            { text: 'A', color: 'text.primary', variant: 'PoppinsBig-h1' },
            { text: 'disruptive', color: 'text.secondary', variant: 'TobiasBig-h1' }
          ]}
          secondLineText={[{ text: 'concept', color: 'text.primary', variant: 'PoppinsBig-h1' }]}
        />
        <Typography
          variant="PoppinsBig-subtitle2"
          color="text.primary"
          sx={{
            mt: { xs: 5, md: 10 },
            display: 'block',
            maxWidth: '569px',
            opacity: firstTextSectionOpacity
          }}>
          We are on a mission to disrupt the software development industry by cutting to the chase
          of what is important.
        </Typography>
        <Typography
          variant="PoppinsBig-subtitle2"
          color="text.primary"
          sx={{
            marginTop: '34px',
            display: 'block',
            maxWidth: '569px',
            opacity: secondTextSectionOpacity
          }}>
          We create fully custom, stable, and flexible software that can be changed and extended
          seamlessly as the world, and the needs of your business, evolve.
        </Typography>
        <InteractiveLink
          text="Read more about what makes our concept unique"
          navigate={() => router.push('/concept')}
          variant="PoppinsSmall-button"
          color="text.primary"
          sx={{ mt: { xs: 5, md: 10 }, opacity: linkOpacity }}
        />
      </TextContainer>
      <MediaSection
        mediaUrl="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/building_blocks.mov"
        isVideo
        mediaLocation="left"
        marginTop={isMobile ? 0 : undefined}
      />
    </Grid>
  );
};

export default ConceptPageTeaserSection;
