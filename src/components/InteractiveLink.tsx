import { Box, Divider, Typography, TypographyProps } from '@mui/material';
import { FC, useState } from 'react';

type Props = {
  text: string;
  navigate: () => void;
  marginTop?: number;
} & Pick<TypographyProps, 'color' | 'variant'>;

const InteractiveLink: FC<Props> = ({ text, color, variant, navigate, marginTop = 0 }) => {
  const [width, setWidth] = useState(0);

  return (
    <Box sx={{ mt: marginTop, width: 'fit-content' }}>
      <Typography
        variant={variant}
        sx={{ color, width: 'fit-content', cursor: 'pointer' }}
        onMouseOver={() => {
          setWidth(100);
        }}
        onClick={navigate}
        onMouseOut={() => {
          setWidth(0);
        }}>
        {text}
        <Divider sx={{ borderColor: color, width: `${width}%`, transition: 'width 500ms ease' }} />
      </Typography>
    </Box>
  );
};

export default InteractiveLink;
