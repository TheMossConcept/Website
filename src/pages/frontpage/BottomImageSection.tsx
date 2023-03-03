import { Grid } from '@mui/material';
import Image from 'mui-image';
import TrustAndRespectImage from '../../assets/Images/trust_and_respect.jpg';
import TallPurposeImage from '../../assets/Images/purpose_tall.jpg';
import { FC } from 'react';

const BottomImageSection: FC = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 32 }}>
      <Grid item xs={6} sx={{ mt: 29 }}>
        <Image src={TallPurposeImage} width="100%" height="auto" />
      </Grid>
      <Grid item xs={6}>
        <Image src={TrustAndRespectImage} width="100%" height="auto" />
      </Grid>
    </Grid>
  );
};

export default BottomImageSection;
