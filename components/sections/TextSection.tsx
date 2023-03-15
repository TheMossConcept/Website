import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

type TextSectionProps = {
  textSections: string[];
  headline?: string;
  pointList?: boolean;
  mt?: number;
};

const TextSection: FC<TextSectionProps> = ({
  textSections,
  headline,
  pointList,
  mt: marginTop = 32
}) => {
  return (
    <Grid
      item
      container
      xs={12}
      justifyContent="center"
      sx={{ mt: { xs: marginTop / 2, md: marginTop } }}>
      {headline && (
        <Grid item xs={12} sx={{ mb: 10 }}>
          <Grid container justifyContent="center">
            <Grid item md={6} xs={true} sx={{ px: { xs: 4, md: 0 } }}>
              <Typography variant="TobiasSmall-h1" color="secondary.main">
                {headline}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item container md={6} xs={true} sx={{ px: { xs: 4, md: 0 } }}>
        {textSections.map((text) => (
          <Grid item xs={12} key={text} sx={{ mb: 3 }}>
            {pointList && <CircleIcon color="primary" sx={{ fontSize: '5px' }} />}
            <Typography
              color="secondary.main"
              variant="PoppinsBig-body"
              component="div"
              // The margin top is a hack to make the the dots align with the text
              sx={pointList ? { ml: 4, marginTop: '-18px' } : undefined}>
              {text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TextSection;
