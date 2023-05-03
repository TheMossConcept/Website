import { Grid, Typography } from '@mui/material';
import { FC, RefObject, useEffect, useRef, useState } from 'react';
import TextContainer from '../components/TextContainer';
import calculateOpacity from '../utilities/calculateOpacity';
import MediaSection from '../components/sections/MediaSection';
import HeadlineSection from '../components/sections/HeadlineSection';
import InteractiveLink from '../components/InteractiveLink';
import { useRouter } from 'next/router';
import useIsMobile from '../utilities/useIsMobile';

const ConceptPageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

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
      <ContentArea containerRef={containerRef} />
      <MediaSection
        mediaUrl="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/building_blocks.mov"
        isVideo
        mediaLocation="left"
        marginTop={isMobile ? 0 : undefined}
      />
    </Grid>
  );
};

type ContentAreaProps = {
  containerRef: RefObject<HTMLDivElement>;
};

// This is a separate component to prevent excessive re-render of the background
const ContentArea: FC<ContentAreaProps> = ({ containerRef }) => {
  const isMobile = useIsMobile();

  const [firstTextSectionOpacity, setFirstTextOpacity] = useState(0);
  const [secondTextSectionOpacity, setSecondTextOpacity] = useState(0);
  const [linkOpacity, setLinkOpacity] = useState(0);

  useEffect(() => {
    const updateOpacity = () => {
      const newFirstTextSectionOpacity = calculateOpacity(
        containerRef,
        isMobile ? 50 : 82.5,
        isMobile ? 1.5 : 3
      );
      const newSecondTextSectionOpacity = calculateOpacity(
        containerRef,
        isMobile ? 60 : 87.5,
        isMobile ? 1.5 : 3
      );
      const newLinkOpacity = calculateOpacity(
        containerRef,
        isMobile ? 70 : 92.5,
        isMobile ? 1.5 : 3
      );

      setFirstTextOpacity(newFirstTextSectionOpacity);
      setSecondTextOpacity(newSecondTextSectionOpacity);
      setLinkOpacity(newLinkOpacity);
    };

    window.addEventListener('scroll', updateOpacity, { passive: true });
    return () => window.removeEventListener('scroll', updateOpacity);
  }, []);

  const router = useRouter();

  return (
    <>
      <TextContainer>
        <HeadlineSection
          containerRef={containerRef}
          marginLeft={isMobile ? undefined : '354px'}
          firstLineText={[
            { text: 'A', color: 'text.primary', variant: 'PoppinsBig-h1' },
            { text: 'simple', color: 'text.secondary', variant: 'TobiasBig-h1' }
          ]}
          secondLineText={[{ text: 'concept', color: 'text.primary', variant: 'PoppinsBig-h1' }]}
        />
      </TextContainer>
      <TextContainer textPosition="center">
        <Typography
          variant="PoppinsBig-subtitle2"
          color="text.primary"
          sx={{
            mt: { xs: 5, md: 10 },
            display: 'block',
            maxWidth: '569px',
            opacity: firstTextSectionOpacity
          }}>
          We are on a mission to simplify the software development industry by cutting to the chase
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
    </>
  );
};

export default ConceptPageTeaserSection;
