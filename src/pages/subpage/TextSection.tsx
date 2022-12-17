import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

type TextSectionProps = {
  textSections: string[];
};

const TextSection: FC<TextSectionProps> = ({ textSections }) => {
  return (
    <Grid container justifyContent="center" sx={{ mt: 32 }}>
      <Grid item xs={6}>
        {textSections.map((text) => (
          <Typography
            key={text}
            color="secondary.main"
            variant="PoppinsBig-body"
            component="div"
            sx={{
              mb: 3
            }}>
            {text}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default TextSection;
