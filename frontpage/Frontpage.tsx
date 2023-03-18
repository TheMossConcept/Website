import { FC } from 'react';

import InitialSection from './InitialSection';
import ConceptPageTeaserSection from './ConceptPageTeaserSection';
import PartnershipPageTeaserSection from './PartnershipPageTeaserSection';
import MediaSection from '../components/sections/MediaSection';
import PurposePageTeaserSection from './PurposePageTeaserSection';
import PageContainer from '../components/PageContainer';
import BottomSection from './BottomSection';

const Frontpage: FC = () => {
  return (
    <PageContainer>
      <InitialSection />
      <ConceptPageTeaserSection />
      <PartnershipPageTeaserSection />
      <MediaSection
        mediaUrl="https://themossconcept-website-assets.fra1.cdn.digitaloceanspaces.com/working.mov"
        isVideo
        mediaLocation="full-screen"
      />
      <PurposePageTeaserSection />
      <BottomSection />
    </PageContainer>
  );
};

export default Frontpage;
