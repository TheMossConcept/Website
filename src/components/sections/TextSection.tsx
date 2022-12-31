import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

type TextSectionProps = {
  textSections: string[];
  headline?: string;
  pointList?: boolean;
};

const TextSection: FC<TextSectionProps> = ({ textSections, headline, pointList }) => {
  return (
    <Grid item container xs={12} justifyContent="center" sx={{ mt: 32 }}>
      {headline && (
        <Grid item xs={12} sx={{ mb: 10 }}>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Typography variant="TobiasSmall-h1" color="secondary.main">
                {headline}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item container xs={6}>
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
