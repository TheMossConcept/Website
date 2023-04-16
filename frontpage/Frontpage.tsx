import { FC } from 'react';

import InitialSection from './InitialSection';
import ConceptPageTeaserSection from './ConceptPageTeaserSection';
import PartnershipPageTeaserSection from './PartnershipPageTeaserSection';
import MediaSection from '../components/sections/MediaSection';
import PurposePageTeaserSection from './PurposePageTeaserSection';
import PageContainer from '../components/PageContainer';
import BottomSection from './BottomSection';
import useIsMobile from '../utilities/useIsMobile';

const Frontpage: FC = () => {
  const isMobile = useIsMobile();

  return (
    <PageContainer>
      <InitialSection />
      <ConceptPageTeaserSection />
      <PartnershipPageTeaserSection />
      <MediaSection
        mediaUrl="/videos/frontpage.mp4"
        isVideo
        marginTop={isMobile ? 5 : undefined}
        mediaLocation="full-screen"
      />
      <PurposePageTeaserSection />
      <BottomSection />
    </PageContainer>
  );
};

export default Frontpage;
