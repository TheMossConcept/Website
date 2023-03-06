import { Box, Grid, Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image';

type TextWithMetadata = {
  text: string;
  isInline?: boolean;
} & Pick<TypographyProps, 'variant' | 'color' | 'sx'>;

/* eslint-disable-next-line @typescript-eslint/ban-types */
type Props = { text: string; headlineText: TextWithMetadata[]; image: string };

const FirstSubpageSection: FC<Props> = ({ text, headlineText, image }) => {
  return (
    <Grid item container xs={12} spacing={5}>
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
        </Box>
        <Box sx={{ mt: '54px', ml: '30px' }}>
          <Typography variant="PoppinsBig-subtitle2" color="#383838">
            {text}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Image
          src={image}
          alt="The tall image depicting this subsection"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default FirstSubpageSection;
