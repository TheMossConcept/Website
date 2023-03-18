import { Grid, GridProps } from '@mui/material';
import { FC } from 'react';

type TextContainerProps = {
  textPosition?: 'left' | 'right';
} & GridProps;

const TextContainer: FC<TextContainerProps> = ({
  children,
  sx,
  textPosition = 'left',
  ...gridProps
}) => {
  const marginLeft = textPosition === 'left' ? '148px' : '0px';
  const marginRight = textPosition === 'right' ? '148px' : '0px';
  return (
    <Grid
      item
      xs={12}
      sx={{
        ml: { xs: 4, md: marginLeft },
        mr: { xs: 4, md: marginRight },
        ...sx
      }}
      {...gridProps}>
      <Grid container justifyItems="center">
        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
};

export default TextContainer;
