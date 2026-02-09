import { FC } from 'react';

import InitialSection from './InitialSection';
import ConceptPageTeaserSection from './ConceptPageTeaserSection';
import MyBackgroundSection from './MyBackgroundSection';
import PartnershipPageTeaserSection from './PartnershipPageTeaserSection';
import PurposePageTeaserSection from './PurposePageTeaserSection';
import PageContainer from '../components/PageContainer';
import BottomSection from './BottomSection';

const Frontpage: FC = () => {
  return (
    <PageContainer>
      <InitialSection />
      <MyBackgroundSection />
      <ConceptPageTeaserSection />
      <PartnershipPageTeaserSection />
      <PurposePageTeaserSection />
      <BottomSection />
    </PageContainer>
  );
};

export default Frontpage;
