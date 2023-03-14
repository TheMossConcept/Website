import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  initialText: string;
  highlightedText?: string;
  textAfterHighlightedText?: string;
  mt?: number;
};

const MainPointSection: FC<Props> = ({
  initialText,
  highlightedText,
  textAfterHighlightedText,
  mt = 32
}) => {
  return (
    <Grid container justifyContent="center" sx={{ mt, textAlign: 'center', px: { sm: 2 } }}>
      <Grid item md={6} sm={true}>
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

export default MainPointSection;
