import { Button, Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';

const ContactSection: FC = () => {
  return (
    <Grid container justifyContent="center" item xs={12} sx={{ mt: 32 }}>
      <Grid item xs={6}>
        <Typography variant="TobiasSmall-h1" color="secondary.main">
          Contact us
        </Typography>
        <Grid item container xs={12} sx={{ mt: 10 }}>
          <Grid item xs={6}>
            <Typography
              color="#000"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px'
              }}>
              Name*
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              color="#000"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px'
              }}>
              Email*
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} sx={{ mt: 4 }} spacing={4}>
          <Grid item xs={6}>
            <TextField placeholder="Write your name" label="" fullWidth variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <TextField placeholder="Write your email" label="" fullWidth variant="standard" />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 10 }}>
          <Typography
            color="#000"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '18px'
            }}>
            Message
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <TextField helperText="Write your message" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sx={{ mt: 10 }}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ borderColor: 'secondary', borderRadius: '50px', py: '6px', px: '30px' }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
