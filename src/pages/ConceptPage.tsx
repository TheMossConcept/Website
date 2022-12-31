import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import FirstSubpageSection from './subpage/FirstSubpageSection';
import TextSection from '../components/sections/TextSection';
import FirstSubSectionImage from '../assets/Images/frontpage_first_section_image.jpg';
import TallImage from '../assets/Images/tall-image.jpg';
import MediaSection from '../components/sections/MediaSection';
import HeadlineSection from '../components/sections/HeadlineSection';
import ContactSection from '../components/sections/ContactSection';

const ConceptPage: FC = () => {
  return (
    <>
      <FirstSubpageSection />
      <TextSection
        textSections={[
          'In essence, this boils down to working smarter, not harder',
          'This means you get quality bespoke software that has been carefully crafted to fit your workflow and your needs at a fixed price with unprecedented reliability and next to no maintenance costs.',
          'We achieve this by spending less effort on generic aspects of the system and more on uncovering the business logic behind the software so we can ensure that it is tailored perfectly and generates as much value as possible for your organisation.'
        ]}
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="right" />
      <HeadlineSection
        initialText="We never compromise on"
        highlightedText="quality"
        textAfterHighlightedText="which means you get a highly reliable system"
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="full-screen" />
      <TextSection
        headline="Keywords"
        pointList
        textSections={[
          'We work to build trust and to understand your business, your work and your needs in order to generate maximum value for your organisation.',
          'We never compromise on quality which means you get a highly reliable system with few bugs and low maintenance cost. It also means your system can quickly and easily be extended and adapted when your business and your needs grow and evolve.',
          'We offer a fixed price which is unique in the bespoke software development industry. It makes the project completely financially predictable for you and allows us to work together to create the best possible system for you instead of compromising and cutting features to stay within budget.'
        ]}
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="left" />
      <TextSection
        textSections={[
          'At The Moss Concept, we are on a mission to disrupt the software development industry through reuse of generic functionality.',
          'In essence, this boils down to working smarter, not harder. This means you get quality bespoke software that has been carefully crafted to fit your workflow and your needs at a fixed price with unprecedented reliability and next to no maintenance costs.',
          'We achieve this by spending less effort on generic aspects of the system and more on uncovering the business logic behind the software so we can ensure that it is tailored perfectly and generates as much value as possible for your organisation.'
        ]}
      />
      <ContactSection />
      {/* This will become its own section in time! */}
      <Grid item container xs={12} spacing={4} alignContent="flex-end" sx={{ mt: 32 }}>
        <Grid item xs={6}>
          <img src={TallImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} alignSelf="flex-end" sx={{ pb: 4 }}>
          <Typography
            sx={{ fontFamily: 'Tobias', fontSize: '72px', lineHeight: 1 }}
            color="primary">
            Approach
          </Typography>
          <Typography
            sx={{ fontFamily: 'Poppins', fontSize: '76px', ml: '18%' }}
            color="primary.transparent">
            to customers
          </Typography>
          <Typography variant="PoppinsBig-subtitle2" color="secondary" sx={{ mb: 4, mr: 18 }}>
            We aim to create healthy, long lasting relationships with our customers.
          </Typography>
          <Typography variant="PoppinsBig-button" color="secondary.transparent">
            Continue to read
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ConceptPage;
