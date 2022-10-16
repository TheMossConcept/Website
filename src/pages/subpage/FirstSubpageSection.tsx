import { Grid } from '@mui/material';
import { FC } from 'react';
import FirstSubpageSectionImage from '../../assets/Images/first-subpage-section-image.jpg';

/* eslint-disable-next-line @typescript-eslint/ban-types */
type Props = {};

const FirstSubpageSection: FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        hallo
      </Grid>
      <Grid item xs={6}>
        <img src={FirstSubpageSectionImage} width="100%" height="100%" />
      </Grid>
    </Grid>
  );
};

export default FirstSubpageSection;
