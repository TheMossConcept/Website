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
  mt: marginTop = 32
}) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ mt: { xs: marginTop / 2, md: marginTop }, textAlign: 'center', px: { xs: 4, md: 0 } }}>
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
