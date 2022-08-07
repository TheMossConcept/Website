import { Grid, GridProps } from '@mui/material';
import { FC, forwardRef } from 'react';

const TextContainer: FC<GridProps> = forwardRef<HTMLDivElement, GridProps>(function textContainer(
  /* eslint-disable-next-line react/prop-types */
  { children, style, ...gridProps },
  ref
) {
  return (
    <Grid ref={ref} item xs={12} style={{ marginLeft: '148px', ...style }} {...gridProps}>
      <Grid container justifyItems="center">
        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
});

export default TextContainer;
