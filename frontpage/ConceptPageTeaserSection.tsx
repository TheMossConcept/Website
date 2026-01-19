import { Grid, Typography } from '@mui/material';
import { FC, RefObject, useEffect, useRef, useState } from 'react';
import TextContainer from '../components/TextContainer';
import calculateOpacity from '../utilities/calculateOpacity';
import HeadlineSection from '../components/sections/HeadlineSection';
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
        height: isMobile ? '800px' : '1000px',
        paddingTop: { xs: 5, md: 32 },
        marginBottom: { xs: 0, md: 46 },
        backgroundColor: 'secondary.main'
      }}>
      <ContentArea containerRef={containerRef} />
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

      setFirstTextOpacity(newFirstTextSectionOpacity);
      setSecondTextOpacity(newSecondTextSectionOpacity);
    };

    window.addEventListener('scroll', updateOpacity, { passive: true });
    return () => window.removeEventListener('scroll', updateOpacity);
  }, []);

  return (
    <>
      <TextContainer>
        <HeadlineSection
          containerRef={containerRef}
          marginLeft={isMobile ? undefined : '354px'}
          firstLineText={[
            { text: 'Customised solutions', color: 'text.secondary', variant: 'TobiasBig-h1' }
          ]}
          secondLineText={[{ text: 'made accessible', color: 'text.primary', variant: 'PoppinsBig-h1' }]}
        />
      </TextContainer>
      <TextContainer textPosition="center">
        <Typography
          variant="PoppinsBig-subtitle2"
          color="text.primary"
          sx={{
            mt: { xs: 3, md: 6 },
            display: 'block',
            maxWidth: '569px',
            opacity: firstTextSectionOpacity
          }}>
          One-size-fits-all tools force you to adapt your workflows to their limitations. 
          You end up with workarounds, manual data entry, and paying for features you'll never touch.
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
          Our systems fit your exact needs, grow with your company over time, and put you in full control.
        </Typography>
      </TextContainer>
    </>
  );
};

export default ConceptPageTeaserSection;
