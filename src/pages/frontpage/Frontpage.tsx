import { FC } from 'react';

import InitialSection from './InitialSection';
import ConceptPageTeaserSection from './ConceptPageTeaserSection';
import PartnershipPageTeaserSection from './PartnershipPageTeaserSection';
import { Grid } from '@mui/material';
import MediaSection from '../../components/sections/MediaSection';
import PurposePageTeaserSection from './PurposePageTeaserSection';
import ContactSection from '../../components/sections/ContactSection';
import PageContainer from '../../components/PageContainer';
import BottomImageSection from './BottomImageSection';

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
      <BottomImageSection />
      <Grid item xs={12} sx={{ mb: 32 }}>
        <ContactSection />
      </Grid>
    </PageContainer>
  );
};

export default Frontpage;
