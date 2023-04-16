import { Box, Grid, Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';
import useIsMobile from '../../utilities/useIsMobile';
import MediaSection from './MediaSection';

type TextWithMetadata = {
  text: string;
  isInline?: boolean;
} & Pick<TypographyProps, 'variant' | 'color' | 'sx'>;

/* eslint-disable-next-line @typescript-eslint/ban-types */
type Props = {
  text: string;
  headlineText: TextWithMetadata[];
  image?: string;
  video?: string;
  textMarginTop?: number;
};

const FirstSubpageSection: FC<Props> = ({
  text,
  headlineText,
  image,
  video,
  textMarginTop = 0
}) => {
  const isMobile = useIsMobile();
  const sx = isMobile ? { fontSize: '40px' } : {};

  return (
    <Grid item container xs={12} spacing={5} alignItems="center" direction="row-reverse">
      <Grid item md={6} xs={12}>
        {image ? (
          <MediaSection
            mediaLocation="full-screen"
            mediaUrl={image}
            disableImageMovement
            imageDimensions={{ width: '100%', height: 'auto' }}
            marginTop={0}
          />
        ) : video ? (
          <video autoPlay loop muted>
            <source src={video} style={{ width: '100%', height: 'auto' }} />
          </video>
        ) : null}
      </Grid>
      <Grid item md={6} sm={12} style={{ width: '100%' }}>
        <Box sx={{ mx: 3, mt: { xs: textMarginTop / 2, md: textMarginTop } }}>
          {headlineText.map((textBit) => (
            <Typography
              component={textBit.isInline ? 'span' : 'div'}
              variant={textBit.variant}
              color={textBit.color}
              key={textBit.text}
              sx={sx}>
              {textBit.text}
            </Typography>
          ))}
        </Box>
        <Box sx={{ mt: 7, mx: 3 }}>
          <Typography variant="PoppinsBig-subtitle2" color="#383838">
            {text}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FirstSubpageSection;
