import { FC } from 'react';

import InitialSection from './InitialSection';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import { Grid } from '@mui/material';
import MediaSection from '../../components/sections/MediaSection';
import SecondSectionImage from '../../assets/Images/frontpage_second_section_image.jpg';
import ThirdSectionImage from '../../assets/Images/frontpage_third_section_image.jpg';
import TallImage from '../../assets/Images/tall-image.jpg';
import FourthSection from './FourthSection';
import useYScroll from '../../utilities/useYScroll';
import ContactSection from '../../components/sections/ContactSection';

const Frontpage: FC = () => {
  const scrollY = useYScroll();

  return (
    <Grid container sx={{ bgcolor: 'text.secondary' }}>
      <InitialSection scrollY={scrollY} />
      <FirstSection scrollY={scrollY} />
      <SecondSection scrollY={scrollY} />
      <MediaSection imageUrl={ThirdSectionImage} mediaLocation="full-screen" />
      <FourthSection scrollY={scrollY} />
      <Grid container spacing={4} sx={{ mt: 32 }}>
        <Grid item xs={6} sx={{ mt: 29 }}>
          <img src={TallImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6}>
          <img src={SecondSectionImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mb: 32 }}>
        <ContactSection />
      </Grid>
    </Grid>
  );
};

export default Frontpage;
