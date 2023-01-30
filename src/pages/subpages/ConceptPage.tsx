import { FC } from 'react';
import { Grid } from '@mui/material';
import FirstSubpageSection from '../../components/sections/FirstSubpageSection';
import TextSection from '../../components/sections/TextSection';
import FirstSubSectionImage from '../../assets/Images/frontpage_first_section_image.jpg';
import TallImage from '../../assets/Images/tall-image.jpg';
import MediaSection from '../../components/sections/MediaSection';
import MainPointSection from '../../components/sections/MainPointSection';
import ContactSection from '../../components/sections/ContactSection';
import NextPageSection from '../../components/sections/NextPageSection';

const ConceptPage: FC = () => {
  return (
    <Grid container sx={{ bgcolor: 'text.secondary' }}>
      <FirstSubpageSection
        headlineText={[
          {
            text: 'Our ',
            variant: 'PoppinsBig-h2',
            color: '#383838',
            isInline: true
          },
          {
            text: 'disruptive',
            variant: 'TobiasBig-h2',
            color: '#383838',
            isInline: true
          },
          {
            text: 'concept',
            variant: 'PoppinsBig-h2',
            color: '#383838',
            sx: {
              mt: '18px',
              mr: '54px'
            }
          }
        ]}
        image={FirstSubSectionImage}
        text="
            In essence, we work smarter, not harder. We reuse what makes sense which gives us more
            time to ensure quality, to deeply understand your workflows and thereby to build exactly
            the software you need, even when you do not know exactly what that is initially.
          "
      />
      <MainPointSection
        initialText="We reuse"
        highlightedText="high quality"
        textAfterHighlightedText="building blocks across systems"
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="full-screen" />
      <TextSection
        textSections={[
          'Our building blocks constantly improve and evolve so you will have easy access to more advanced features in the future.',
          'The more we reuse a building block, the more time and care is freed up to put into it to ensure it is of the highest possible quality. This leads to highly stable software.',
          'We will build as many custom building blocks as is necessary to build your system exactly as it needs to be. Since we are experts in building small blocks that can easily be composed and reconfigured, your system will be highly flexible.'
        ]}
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="right" />
      <MainPointSection
        initialText="Small, well-shaped building blocks lead to unprecedented"
        highlightedText="flexibility."
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="full-screen" />
      <TextSection
        textSections={[
          'Less time redoing the same functionality over and over with slight variations leads to more time collaborating with you.',
          'One of our most important tasks is to help you achieve the software solutions that generate most value in your unique business.'
        ]}
      />
      <ContactSection />
      <NextPageSection
        text="We aim to create healthy, long lasting relationships with our customers."
        link="/partnership"
        imageUrl={TallImage}
        firstLineText={[{ text: 'Approach', color: 'primary', variant: 'TobiasBig-h2' }]}
        secondLineText={[
          { text: 'to customers', color: 'primary.transparent', variant: 'PoppinsBig-h2' }
        ]}
      />
    </Grid>
  );
};

export default ConceptPage;
