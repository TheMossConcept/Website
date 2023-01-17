import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import { useNavigate } from 'react-router';
import InteractiveLink from '../../components/InteractiveLink';
import HeadlineSection from '../../components/sections/HeadlineSection';
import TextContainer from '../../components/TextContainer';

type Props = { scrollY: number };

const FourthSection: FC<Props> = ({ scrollY: globalYScroll }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  return (
    <Grid item xs={12} sx={{ pt: 32 }} ref={containerRef}>
      <TextContainer>
        <HeadlineSection
          globalYScroll={globalYScroll}
          containerRef={containerRef}
          firstLineText={[{ text: 'Approach', color: 'secondary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: 'to customers', color: 'secondary.transparent', variant: 'PoppinsBig-h1' }
          ]}
        />
        <Typography
          sx={{ mt: 10, width: '38%' }}
          variant="PoppinsBig-subtitle2"
          color="secondary.main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo ut habitant sit cras.
          Aliquam condimentum id nulla lobortis placerat sapien sagittis. Morbi lacus, orci
          tristique pellentesque quisque risus cum.
        </Typography>
        <InteractiveLink
          text="Explore our approach to our customers"
          navigate={() => navigate('/approach')}
          variant="PoppinsSmall-button"
          color="secondary.transparent"
          sx={{ marginTop: 10 }}
        />
      </TextContainer>
    </Grid>
  );
};

export default FourthSection;
