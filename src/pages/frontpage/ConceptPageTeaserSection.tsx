import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import TextContainer from '../../components/TextContainer';
import useAppearingText from '../../utilities/useAppearingText';
import BuildingBlockVideo from '../../assets/Videos/building-blocks.mp4';
import MediaSection from '../../components/sections/MediaSection';
import HeadlineSection from '../../components/sections/HeadlineSection';
import InteractiveLink from '../../components/InteractiveLink';
import { useNavigate } from 'react-router';

const ConceptPageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const firstTextSectionOpacity = useAppearingText(containerRef, 82.5, 4);
  const secondTextSectionOpacity = useAppearingText(containerRef, 87.5, 4);
  const linkOpacity = useAppearingText(containerRef, 92.5, 4);

  const navigate = useNavigate();

  return (
    <Grid
      item
      container
      xs={12}
      ref={containerRef}
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        height: '1455px',
        pt: 32,
        mb: 46,
        backgroundColor: 'secondary.main'
      }}>
      <TextContainer>
        <HeadlineSection
          containerRef={containerRef}
          marginLeft="354px"
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
            marginTop: '80px',
            display: 'block',
            width: '569px',
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
            width: '569px',
            opacity: secondTextSectionOpacity
          }}>
          We create fully custom, stable, and flexible software that can be changed and extended
          seamlessly as the world, and the needs of your business, change and evolve.
        </Typography>
        <InteractiveLink
          text="Read more about what makes our concept unique"
          navigate={() => navigate('/concept')}
          variant="PoppinsSmall-button"
          color="text.primary"
          sx={{ marginTop: 10, opacity: linkOpacity }}
        />
      </TextContainer>
      <MediaSection mediaUrl={BuildingBlockVideo} isVideo mediaLocation="left" />
    </Grid>
  );
};

export default ConceptPageTeaserSection;
