import { Button, Grid, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';

type ContactSectionProps = {
  useContrastColors?: boolean;
};

const ContactSection: FC<ContactSectionProps> = ({ useContrastColors = false }) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  // Once this changes to a shared component, we'll start using yup instead
  const disableSubmitButton = !name || !email || !message;

  return (
    <Grid container justifyContent="center" item xs={12} sx={{ mt: 32 }}>
      <Grid item xs={6}>
        <Typography
          variant="TobiasSmall-h1"
          color={useContrastColors ? 'text.primary' : 'secondary.main'}>
          Contact us
        </Typography>
        <Grid item container xs={12} sx={{ mt: 10 }}>
          <Grid item xs={6}>
            <Typography
              color={useContrastColors ? 'text.primary' : '#000'}
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px'
              }}>
              Name*
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              color={useContrastColors ? 'text.primary' : '#000'}
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
            <TextField
              placeholder="Write your name"
              label=""
              fullWidth
              variant="standard"
              value={name}
              onChange={(event) => setName(event.target.value || undefined)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Write your email"
              label=""
              fullWidth
              variant="standard"
              value={email}
              onChange={(event) => setEmail(event.target.value || undefined)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 10 }}>
          <Typography
            color={useContrastColors ? 'text.primary' : '#000'}
            sx={{
              fontFamily: 'Poppins',
              fontSize: '18px'
            }}>
            Message*
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <TextField
            placeholder="Write your message"
            fullWidth
            multiline
            variant="standard"
            value={message}
            onChange={(event) => setMessage(event.target.value || undefined)}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 10 }}>
          <Button
            variant="outlined"
            color="secondary"
            disabled={disableSubmitButton}
            sx={{
              borderColor: 'secondary',
              borderRadius: '50px',
              py: '6px',
              px: '30px',
              color: useContrastColors ? 'text.primary' : 'secondary'
            }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
