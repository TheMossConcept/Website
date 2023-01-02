import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import FirstSubpageSectionImage from '../../assets/Images/first-subpage-section-image.jpg';

/* eslint-disable-next-line @typescript-eslint/ban-types */
type Props = {};

const FirstSubpageSection: FC<Props> = () => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={6}>
        <Box sx={{ marginTop: '53.55%', ml: '30px' }}>
          <Typography component="span" variant="PoppinsBig-h2" color="#383838">
            A{' '}
          </Typography>
          <Typography component="span" variant="TobiasBig-h2" color="#383838">
            disruptive
          </Typography>
          <Typography
            variant="PoppinsBig-h2"
            sx={{
              mt: '18px',
              mr: '54px'
            }}
            color="#383838">
            concept
          </Typography>
        </Box>
        <Box sx={{ mt: '54px', ml: '30px' }}>
          <Typography variant="PoppinsBig-subtitle2" color="#383838">
            We are on a mission to disrupt the software development industry through reuse of
            generic functionality
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img src={FirstSubpageSectionImage} width="100%" height="100%" />
      </Grid>
    </Grid>
  );
};

export default FirstSubpageSection;
