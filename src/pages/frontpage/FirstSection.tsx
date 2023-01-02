import { Grid, Typography } from '@mui/material';
import { FC, useRef, useState, useLayoutEffect } from 'react';
import TextContainer from '../../components/TextContainer';
import useAppearingText from '../../utilities/useAppearingText';
import FirstSubSectionImage from '../../assets/Images/frontpage_first_section_image.jpg';
import MediaSection from '../../components/sections/MediaSection';
import HeadlineSection from '../../components/sections/HeadlineSection';
import InteractiveLink from '../../components/InteractiveLink';
import { useNavigate } from 'react-router';

type Props = { scrollY: number };

const FrontpageSection: FC<Props> = ({ scrollY: globalYScroll }) => {
  const [percentageOfPageVisible, setPercentageOfScreenVisible] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef?.current) {
      setPercentageOfScreenVisible(globalYScroll / containerRef.current.offsetTop);
    }
  }, [globalYScroll, containerRef]);

  const firstSectionOpacity = useAppearingText(50, percentageOfPageVisible);
  const secondSectionOpacity = useAppearingText(55, percentageOfPageVisible);

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
          globalYScroll={globalYScroll}
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
            opacity: firstSectionOpacity
          }}>
          We are on a mission to disrupt the software development industry through reuse of generic
          functionality.
        </Typography>
        <Typography
          variant="PoppinsBig-subtitle2"
          color="text.primary"
          sx={{
            marginTop: '34px',
            display: 'block',
            width: '569px',
            opacity: secondSectionOpacity
          }}>
          Perfectly tailored software that generates as much value as possible for your
          organisation.
        </Typography>
        <InteractiveLink
          text="Read more about our concept"
          navigate={() => navigate('/concept')}
          variant="PoppinsSmall-button"
          color="text.primary"
          marginTop={10}
        />
      </TextContainer>
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="left" />
    </Grid>
  );
};

export default FrontpageSection;
