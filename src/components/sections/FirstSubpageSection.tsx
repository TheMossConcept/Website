import { Box, Grid, Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

type TextWithMetadata = {
  text: string;
  isInline?: boolean;
} & Pick<TypographyProps, 'variant' | 'color' | 'sx'>;

/* eslint-disable-next-line @typescript-eslint/ban-types */
type Props = { text: string; headlineText: TextWithMetadata[]; image: string };

const FirstSubpageSection: FC<Props> = ({ text, headlineText, image }) => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={6}>
        <Box sx={{ marginTop: '53.55%', ml: '30px' }}>
          {headlineText.map((textBit) => (
            <Typography
              component={textBit.isInline ? 'span' : 'div'}
              variant={textBit.variant}
              color={textBit.color}
              key={textBit.text}>
              {textBit.text}
            </Typography>
          ))}
          {/*
          <Typography component="span" variant="PoppinsBig-h2" color="#383838">
            Our{' '}
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
            */}
        </Box>
        <Box sx={{ mt: '54px', ml: '30px' }}>
          <Typography variant="PoppinsBig-subtitle2" color="#383838">
            {text}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img src={image} width="100%" height="100%" />
      </Grid>
    </Grid>
  );
};

export default FirstSubpageSection;
