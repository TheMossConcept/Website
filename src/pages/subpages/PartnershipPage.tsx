import { FC } from 'react';
import FirstSubpageSection from '../../components/sections/FirstSubpageSection';
import FirstSubSectionImage from '../../assets/Images/frontpage_first_section_image.jpg';
import MediaSection from '../../components/sections/MediaSection';
import { Grid } from '@mui/material';
import MainPointSection from '../../components/sections/MainPointSection';
import TextSection from '../../components/sections/TextSection';

const PartnershipPage: FC = () => {
  return (
    <Grid container>
      <FirstSubpageSection
        image={FirstSubSectionImage}
        text="We do not just provide you with isolated software systems, we take as much responsibility for your software development needs as you want us to. We continuously work to better our understanding of your business and collaborate with you to build software that most effectively supports it."
        headlineText={[
          {
            text: 'Our ',
            variant: 'PoppinsBig-h2',
            color: '#383838',
            isInline: true
          },
          {
            text: 'partnership',
            variant: 'TobiasBig-h2',
            color: '#383838',
            isInline: true
          }
        ]}
      />
      <MainPointSection
        initialText="Software is worthless unless it generates "
        highlightedText="concrete value "
        textAfterHighlightedText="for your business."
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="full-screen" />
      <TextSection
        textSections={[
          'Based on the deep understanding of your business and your needs we work to build, we will challenge your perceptions whenever we deem it appropriate to help you achieve maximum business value.',
          'As we are experts in IT, we can help you realize potential you did not know about and help you avoid pitfalls, particularly when we have a solid understanding of your business. We believe we can add valuable knowledge and experience to your software development journey.',
          'This is only truly effective in a collaborative environment of mutual trust and respect which is one of the reasons why creating such an environment is a high priority for us.'
        ]}
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="left" />
      <MainPointSection
        initialText="We work to make IT "
        highlightedText="understandable and relatable "
        textAfterHighlightedText="to your business"
      />
      <TextSection
        textSections={[
          'We want to demystify the complex and vast world of IT. We want to be your trusted collaborator and help you navigate the complexities and possibilities of IT.',
          'We will always provide our recommendations and challenge your perceptions when we deem it appropriate, however, in the end, you are the one making informed decisions. That is why it is important to us to be as transparent and clear as possible and work to make IT as understandable and accessible as possible.'
        ]}
      />
      <MediaSection imageUrl={FirstSubSectionImage} mediaLocation="full-screen" />
      <MainPointSection
        initialText="We are a "
        highlightedText="purpose-driven "
        textAfterHighlightedText="company that is here to serve your business and the world"
      />
    </Grid>
  );
};

export default PartnershipPage;
