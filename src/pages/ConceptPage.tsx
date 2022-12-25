import { FC } from 'react';
import FirstSubpageSection from './subpage/FirstSubpageSection';
import TextSection from './subpage/TextSection';
import FirstSubSectionImage from '../assets/Images/frontpage_first_section_image.jpg';
import MediaSection from './subpage/MediaSection';
import HeadlineSection from './subpage/HeadlineSection';

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
          'We work to build trust and to understand your business, your work and your needs in order to generate maximum value for your organisation.',
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
    </>
  );
};

export default ConceptPage;
