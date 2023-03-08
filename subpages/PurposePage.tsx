import { Grid } from '@mui/material';
import { FC } from 'react';
import TallPurposeImage from '../public/images/purpose_tall.jpg';
import HighQualityImage from '../public/images/working_in_office.jpg';
import TrustAndRespectTeam from '../public/images/trust_and_respect_in_team.jpg';
import ContactSection from '../components/sections/ContactSection';
import FirstSubpageSection from '../components/sections/FirstSubpageSection';
import MainPointSection from '../components/sections/MainPointSection';
import MediaSection from '../components/sections/MediaSection';
import TextSection from '../components/sections/TextSection';
import PageContainer from '../components/PageContainer';

const PurposePage: FC = () => {
  return (
    <PageContainer>
      <FirstSubpageSection
        headlineText={[
          {
            text: 'The deeper ',
            variant: 'PoppinsBig-h2',
            color: '#383838',
            isInline: true
          },
          {
            text: 'purpose',
            variant: 'TobiasBig-h2',
            color: '#383838',
            isInline: true
          }
        ]}
        image={TallPurposeImage}
        text="Our purpose is to free up time and energy for what truly matters. In the context of your business, that means better support for your essential workflows and less time wasted on repetitive tasks that do not utilize the skills of your employees fully. In turn, this leads to employees who are more productive and fulfilled."
      />
      <MainPointSection
        initialText="We envision a world where people are free to do what is most "
        highlightedText="meaningful "
        textAfterHighlightedText="to them"
      />
      <MediaSection
        mediaUrl="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/forrest.mov"
        isVideo
        mediaLocation="full-screen"
      />
      <MainPointSection
        initialText=""
        highlightedText="Quality and value generation "
        textAfterHighlightedText="are the two core values we employ when we code"
      />
      <TextSection
        textSections={[
          'Quality is a core value because it ensures that the software we produce is stable and reliable enough to be relied upon even for business critical tasks while simultaniously being flexible enough to stay relevant over time.',
          'Value generation is a core value because we want the software we develop to help free up time and energy. It does not matter how well-made a software system is if it does not fit with the workflows it is meant to support. If it does not fit with the people it is supposed to help, it does not generate value and thereby it becomes irrelevant.'
        ]}
        mt={16}
      />
      <MediaSection mediaUrl={HighQualityImage} mediaLocation="full-screen" />
      <MainPointSection
        initialText=""
        highlightedText="Trust and respect "
        textAfterHighlightedText="are the two core values we employ when dealing with people"
      />
      <TextSection
        textSections={[
          'Trust is essential as it is the core of a healthy, mutually beneficial relationship. If you do not trust us, you will not allow us to fully help and serve you with our expertise. If we do not trust you, we will not be able to dedicate ourselves fully to your company and your needs.',
          'Respect is essential as that is what allows us to remain curious and humble and learn from each other. If you do not respect us, our expertise and advice is not taken seriously and therefore has little or not impact. If we do not respect you, we will never truly understand your business and its unique needs and we will not be able to create software that generates massive value for you.'
        ]}
        mt={16}
      />
      <MediaSection mediaUrl={TrustAndRespectTeam} mediaLocation="full-screen" />
      <Grid item xs={12} sx={{ mb: 32 }}>
        <ContactSection />
      </Grid>
    </PageContainer>
  );
};

export default PurposePage;