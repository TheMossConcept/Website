import { FC } from 'react';

import InitialSection from './InitialSection';
import ConceptPageTeaserSection from './ConceptPageTeaserSection';
import PartnershipPageTeaserSection from './PartnershipPageTeaserSection';
import { Grid } from '@mui/material';
import MediaSection from '../../components/sections/MediaSection';
import PurposePageTeaserSection from './PurposePageTeaserSection';
import ContactSection from '../../components/sections/ContactSection';
import WorkingVideo from '../../assets/Videos/working.mov';
import TrustAndRespectImage from '../../assets/Images/trust_and_respect.jpg';
import TallPurposeImage from '../../assets/Images/purpose_tall.jpg';

const Frontpage: FC = () => {
  return (
    <Grid container sx={{ bgcolor: 'text.secondary', maxWidth: '100vw', overflowX: 'hidden' }}>
      <InitialSection />
      <ConceptPageTeaserSection />
      <PartnershipPageTeaserSection />
      <MediaSection mediaUrl={WorkingVideo} isVideo mediaLocation="full-screen" />
      <PurposePageTeaserSection />
      <Grid container spacing={4} sx={{ mt: 32 }}>
        <Grid item xs={6} sx={{ mt: 29 }}>
          <img src={TallPurposeImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6}>
          <img src={TrustAndRespectImage} style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mb: 32 }}>
        <ContactSection />
      </Grid>
    </Grid>
  );
};

export default Frontpage;
