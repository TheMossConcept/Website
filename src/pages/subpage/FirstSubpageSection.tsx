import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import FirstSubpageSectionImage from '../../assets/Images/first-subpage-section-image.jpg';

/* eslint-disable-next-line @typescript-eslint/ban-types */
type Props = {};

const FirstSubpageSection: FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ marginTop: '53.55%', ml: '30px' }}>
          <Typography
            component="span"
            sx={{ fontFamily: 'Poppins', fontSize: '72px', fontWeight: 500, lineHeight: 0.7 }}
            color="#383838">
            A{' '}
          </Typography>
          <Typography
            component="span"
            sx={{ fontFamily: 'Tobias', fontSize: '76px', fontWeight: 500, lineHeight: 0.7 }}
            color="#383838">
            disruptive
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '72px',
              fontWeight: 500,
              textAlign: 'right',
              lineHeight: 0.7,
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
