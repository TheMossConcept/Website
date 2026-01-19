import { FC } from 'react';

import InitialSection from './InitialSection';
import ConceptPageTeaserSection from './ConceptPageTeaserSection';
import PartnershipPageTeaserSection from './PartnershipPageTeaserSection';
import PurposePageTeaserSection from './PurposePageTeaserSection';
import PageContainer from '../components/PageContainer';
import BottomSection from './BottomSection';

const Frontpage: FC = () => {
  return (
    <PageContainer>
      <InitialSection />
      <ConceptPageTeaserSection />
      <PartnershipPageTeaserSection />
      <PurposePageTeaserSection />
      <BottomSection />
    </PageContainer>
  );
};

export default Frontpage;
