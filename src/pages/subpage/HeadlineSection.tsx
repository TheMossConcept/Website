import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  initialText: string;
  highlightedText?: string;
  textAfterHighlightedText?: string;
};

const HeadlineSection: FC<Props> = ({ initialText, highlightedText, textAfterHighlightedText }) => {
  return (
    <Grid container justifyContent="center" sx={{ mt: 32 }}>
      <Grid item xs={6}>
        <Typography
          color="primary.transparent"
          variant="PoppinsSmall-h1"
          component="span"
          sx={{
            display: 'inline'
          }}
          textAlign="start">
          {initialText}{' '}
        </Typography>
        <Typography
          color="primary.main"
          variant="TobiasSmall-h1"
          component="span"
          sx={{
            display: 'inline'
          }}>
          {highlightedText}{' '}
        </Typography>
        <Typography
          color="primary.transparent"
          variant="PoppinsSmall-h1"
          component="span"
          sx={{
            display: 'inline'
          }}
          textAlign="start">
          {textAfterHighlightedText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeadlineSection;
