import { Grid, Typography } from '@mui/material';
import { FC, useRef, useState, useEffect } from 'react';
import TextContainer from '../components/TextContainer';
import useAppearingText from '../utilities/useAppearingText';
import FirstSubSectionImage from '../assets/Images/frontpage_first_section_image.jpg';

type Props = { scrollY: number };

const FrontpageSection: FC<Props> = ({ scrollY: globalYScroll }) => {
  const [localYScroll, setLocalYScroll] = useState<number>();
  const [percentageOfPageVisible, setPercentageOfScreenVisible] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef?.current) {
      setPercentageOfScreenVisible(globalYScroll / containerRef.current.offsetTop);
    }
  }, [globalYScroll, containerRef]);

  useEffect(() => {
    if (containerRef?.current) {
      setLocalYScroll(globalYScroll - containerRef.current.offsetTop);
    }
  }, [globalYScroll, containerRef]);

  // Because there's no opacity for the first 35 % of the page!
  const headlineOpacity = useAppearingText(35, percentageOfPageVisible);
  const firstSectionOpacity = useAppearingText(50, percentageOfPageVisible);
  const secondSectionOpacity = useAppearingText(55, percentageOfPageVisible);

  const textTransformValue = localYScroll ? localYScroll / 20 : 0;
  const textTransformValueNegated = textTransformValue * -1;

  console.log(`Local Y scroll: ${localYScroll}`);

  return (
    <Grid
      container
      ref={containerRef}
      alignItems="flex-start"
      justifyContent="flex-start"
      style={{
        height: '1455px',
        paddingTop: '256px',
        backgroundColor: '#383838'
      }}>
      <TextContainer>
        <span>
          <Typography
            color="text.primary"
            variant="PoppinsBig-h1"
            component="span"
            sx={{
              display: 'inline-block',
              transform: `translate(${textTransformValue}px)`,
              opacity: headlineOpacity
            }}
            textAlign="start">
            A&nbsp;
          </Typography>
          <Typography
            color="text.secondary"
            variant="TobiasBig-h1"
            component="span"
            sx={{
              display: 'inline-block',
              transform: `translate(${textTransformValue}px)`,
              opacity: headlineOpacity
            }}>
            disruptive
          </Typography>
        </span>
        <Typography
          color="text.primary"
          variant="PoppinsBig-h1"
          sx={{
            ml: '354px',
            transform: `translate(${textTransformValueNegated}px)`,
            opacity: headlineOpacity
          }}
          component="h1">
          concept
        </Typography>
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
        <Typography
          color="text.primary"
          variant="PoppinsSmall-button"
          sx={{ marginTop: '80px', display: 'block' }}>
          Read more about our concept
        </Typography>
      </TextContainer>
      <img
        src={FirstSubSectionImage}
        width={1059}
        height={731}
        style={{ marginTop: '256px', float: 'left' }}
      />
    </Grid>
  );
};

export default FrontpageSection;
