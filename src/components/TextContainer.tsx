import { Grid } from '@mui/material';
import { FC } from 'react';

const TextContainer: FC = ({ children }) => {
  return (
    <Grid item xs={12} style={{ marginLeft: '148px' }}>
      <Grid container justifyItems="center">
        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
};

export default TextContainer;
