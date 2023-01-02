import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import HeadlineSection from '../../components/sections/HeadlineSection';
import TextContainer from '../../components/TextContainer';
import FirstSubSectionImage from '../../assets/Images/frontpage_first_section_image.jpg';
import SecondSubSectionImage from '../../assets/Images/frontpage_second_section_image.jpg';
import InteractiveLink from '../../components/InteractiveLink';
import { useNavigate } from 'react-router';
import useAppearingText from '../../utilities/useAppearingText';

type Props = { scrollY: number };

const SecondSection: FC<Props> = ({ scrollY: globalYScroll }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // const firstTextOpacity = useAppearingText();

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
      <Grid item sx={{ ml: 40, mb: 10 }} xs={12}>
        <HeadlineSection
          containerRef={containerRef}
          globalYScroll={globalYScroll}
          firstLineText={[
            { text: 'Values, vision', color: 'primary.main', variant: 'TobiasBig-h1' }
          ]}
          secondLineText={[
            { text: 'and', color: 'primary.transparent', variant: 'PoppinsBig-h1' },
            { text: 'mission', color: 'primary.main', variant: 'TobiasBig-h1' }
          ]}
        />
      </Grid>
      <Grid container spacing={19} sx={{ mb: 10 }}>
        <Grid item xs={6} alignSelf="center">
          <TextContainer>
            <Typography color="primary.main" variant="PoppinsBig-subtitle2">
              We offer a fixed price which is unique in the bespoke software development industry.
            </Typography>
          </TextContainer>
        </Grid>
        <Grid item xs={6}>
          <img src={FirstSubSectionImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <Grid container spacing={19}>
        <Grid item xs={6}>
          <img src={SecondSubSectionImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} alignSelf="center">
          <TextContainer textPosition="right">
            <Typography color="primary.main" variant="PoppinsBig-subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo ut habitant sit cras.
              Aliquam condimentum id nulla lobortis placerat sapien sagittis. Morbi lacus, orci
              tristique pellentesque quisque risus cum.
            </Typography>
          </TextContainer>
          <InteractiveLink
            text="Read more about our values, vision and mission"
            color="primary.transparent"
            variant="PoppinsSmall-button"
            navigate={() => navigate('/values')}
            marginTop={10}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
