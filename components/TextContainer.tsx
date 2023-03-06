import { Grid, GridProps } from '@mui/material';
import { FC } from 'react';

type TextContainerProps = {
  textPosition?: 'left' | 'right';
} & GridProps;

const TextContainer: FC<TextContainerProps> = ({
  children,
  style,
  textPosition = 'left',
  ...gridProps
}) => {
  return (
    <Grid
      item
      xs={12}
      style={{
        marginLeft: textPosition === 'left' ? '148px' : '0px',
        marginRight: textPosition === 'right' ? '148px' : '0px',
        ...style
      }}
      {...gridProps}>
      <Grid container justifyItems="center">
        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
};

export default TextContainer;
