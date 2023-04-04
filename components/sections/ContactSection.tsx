import { Alert, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { FC, useState } from 'react';

type ContactSectionProps = {
  useContrastColors?: boolean;
};

enum FeedbackState {
  SUCCESS,
  FAILURE,
  CLOSED
}

const ContactSection: FC<ContactSectionProps> = ({ useContrastColors = false }) => {
  const [feedbackSnackbarState, setFeedbackSnackbarState] = useState<FeedbackState>(
    FeedbackState.CLOSED
  );

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const reset = () => {
    setName(undefined);
    setEmail(undefined);
    setMessage(undefined);
  };

  // Once this changes to a shared component, we'll start using yup instead
  const disableSubmitButton = !name || !email || !message;

  const onSubmitClick = () => {
    axios
      .post(
        'https://prod2-224.westeurope.logic.azure.com:443/workflows/0331da2d2c0c4e6384640441dda0cb20/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i1RNKiEQrnxL452D0xXcKfhlYkk4yGfo7QHPvQJuFhE',
        {
          name,
          email,
          message
        }
      )
      .then(() => {
        setFeedbackSnackbarState(FeedbackState.SUCCESS);
        reset();
      })
      .catch(() => {
        setFeedbackSnackbarState(FeedbackState.FAILURE);
      });
  };

  return (
    <Grid container justifyContent="center" item xs={12} sx={{ marginTop: { xs: 5, md: 32 } }}>
      <Grid item xs={12} md={6} sx={{ px: { xs: 4, md: 0 } }}>
        <Typography
          variant="TobiasSmall-h1"
          color={useContrastColors ? 'text.primary' : 'secondary.main'}>
          Contact us
        </Typography>
        <Grid item container xs={12} spacing={4} sx={{ marginTop: { xs: 5, md: 10 } }}>
          <Grid item xs={12} md={6}>
            <Typography
              color={useContrastColors ? 'text.primary' : '#000'}
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px'
              }}>
              Name*
            </Typography>
            <TextField
              placeholder="Write your name"
              label=""
              fullWidth
              variant="standard"
              value={name}
              onChange={(event) => setName(event.target.value || undefined)}
              sx={useContrastColors ? {} : { input: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              color={useContrastColors ? 'text.primary' : '#000'}
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px'
              }}>
              Email*
            </Typography>
            <TextField
              placeholder="Write your email"
              label=""
              fullWidth
              variant="standard"
              value={email}
              onChange={(event) => setEmail(event.target.value || undefined)}
              sx={useContrastColors ? {} : { input: { color: 'black' } }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: { xs: 4, md: 10 } }}>
          <Typography
            color={useContrastColors ? 'text.primary' : '#000'}
            sx={{
              fontFamily: 'Poppins',
              fontSize: '18px'
            }}>
            Message*
          </Typography>
          <TextField
            placeholder="Write your message"
            fullWidth
            multiline
            variant="standard"
            value={message}
            onChange={(event) => setMessage(event.target.value || undefined)}
            sx={useContrastColors ? {} : { textarea: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: { xs: 4, md: 10 } }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onSubmitClick}
            disabled={disableSubmitButton}
            sx={{
              borderColor: 'secondary',
              borderRadius: '50px',
              py: '6px',
              px: '30px',
              color: useContrastColors ? 'text.primary' : 'secondary',
              '&.Mui-disabled': useContrastColors
                ? {
                    color: 'rgba(255, 255, 255, 0.25)',
                    borderColor: 'rgba(0, 0, 0, 0.25)'
                  }
                : {}
            }}>
            Submit
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={feedbackSnackbarState !== FeedbackState.CLOSED}
        autoHideDuration={5000}
        onClose={() => setFeedbackSnackbarState(FeedbackState.CLOSED)}>
        <div>
          {feedbackSnackbarState === FeedbackState.SUCCESS && (
            <Alert severity="success">
              Your message was sent successfully. We will be in touch shortly
            </Alert>
          )}
          {feedbackSnackbarState === FeedbackState.FAILURE && (
            <Alert severity="error">
              Something went wrong. Try again and if the issue persists, send your email directly to
              niklas@themossconcept.com
            </Alert>
          )}
        </div>
      </Snackbar>
    </Grid>
  );
};

export default ContactSection;
