import { FC } from 'react';
import FirstSubpageSection from '../../components/sections/FirstSubpageSection';
import MediaSection from '../../components/sections/MediaSection';
import TallPartnershipImage from '../../assets/Images/partnership_tall.jpg';
import CollaborationImage from '../../assets/Images/collaboration.jpg';
import TeamworkVideo from '../../assets/Videos/teamwork.mp4';
import TallPurposeImage from '../../assets/Images/purpose_tall.jpg';
import { Grid } from '@mui/material';
import MainPointSection from '../../components/sections/MainPointSection';
import TextSection from '../../components/sections/TextSection';
import ContactSection from '../../components/sections/ContactSection';
import NextPageSection from '../../components/sections/NextPageSection';
import BusinessValueImage from '../../assets/Images/business_value.jpg';
import UnderstandabilityIllustration from '../../assets/Images/understandability_illustration.png';
import PageContainer from '../../components/PageContainer';

const PartnershipPage: FC = () => {
  return (
    <PageContainer>
      <FirstSubpageSection
        image={TallPartnershipImage}
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
      <MediaSection mediaUrl={BusinessValueImage} mediaLocation="full-screen" />
      <TextSection
        textSections={[
          'Based on the deep understanding of your business and your needs, we work to build software that generates as much value for your unique business as possible.',
          'We will challenge your perceptions whenever we deem it appropriate to help you achieve maximum business value. As we are experts in IT, we can help you realize potential you did not know about and help you avoid pitfalls, particularly when we have a solid understanding of your business. We believe we can add valuable knowledge and experience to your software development journey.',
          'This is only truly effective in a collaborative partnership characterized by mutual trust and respect which is one of the reasons why creating such a partnership is a high priority for us.'
        ]}
      />
      <MediaSection mediaUrl={CollaborationImage} mediaLocation="left" />
      <MainPointSection
        initialText="We work to make IT "
        highlightedText="understandable and accessible "
        textAfterHighlightedText="to your business"
      />
      <MediaSection
        mediaUrl={UnderstandabilityIllustration}
        mediaLocation="full-screen"
        imageDimensions={{ width: '80%', height: 'auto' }}
        mt={16}
      />
      <TextSection
        textSections={[
          'We want to demystify the complex and vast world of IT. We want to be your trusted partner and help you navigate the complexities and possibilities of IT.',
          'We will always provide our recommendations and challenge your perceptions when we deem it appropriate, however, in the end, you are the one making the decisions. That is why it is important to us to be transparent and clear and work to make IT understandable and accessible to you.'
        ]}
        mt={16}
      />
      <MediaSection mediaUrl={TeamworkVideo} isVideo mediaLocation="full-screen" />
      <MainPointSection
        initialText="We are a "
        highlightedText="purpose-driven "
        textAfterHighlightedText="company that is here to serve your business and the world"
      />
      <ContactSection />
      <NextPageSection
        text="Our work is rooted in a deeper purpose."
        link="/purpose"
        imageUrl={TallPurposeImage}
        firstLineText={[{ text: 'Our deeper', color: 'primary', variant: 'TobiasBig-h2' }]}
        secondLineText={[
          { text: 'purpose', color: 'primary.transparent', variant: 'PoppinsBig-h2' }
        ]}
      />
    </PageContainer>
  );
};

export default PartnershipPage;
