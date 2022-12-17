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
    </>
  );
};

export default ConceptPage;
