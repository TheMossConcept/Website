import { Grid, Typography } from '@mui/material';
import { ResponsiveStyleValue, SxProps } from '@mui/system';
import { FC } from 'react';

type Props = {
  initialText: string;
  highlightedText?: string;
  textAfterHighlightedText?: string;
  mt?: { xs: number; md: number };
  mb?: number;
};

const MainPointSection: FC<Props> = ({
  initialText,
  highlightedText,
  textAfterHighlightedText,
  mt = { xs: 16, md: 32 },
  mb: marginBottom
}) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ mt, marginBottom, textAlign: 'center', px: { xs: 4, md: 0 } }}>
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
