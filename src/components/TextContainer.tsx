import { Grid, GridProps } from '@mui/material';
import { FC } from 'react';

const TextContainer: FC<GridProps> = ({ children, style, ...gridProps }) => {
  return (
    <Grid item xs={12} style={{ marginLeft: '148px', ...style }} {...gridProps}>
      <Grid container justifyItems="center">
        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
};

export default TextContainer;
