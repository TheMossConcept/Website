import { Box, BoxProps, Divider, Typography, TypographyProps } from '@mui/material';
import { FC, useState } from 'react';

type Props = {
  text: string;
  navigate: () => void;
  marginTop?: number;
} & Pick<TypographyProps, 'color' | 'variant'> &
  Pick<BoxProps, 'sx'>;

const InteractiveLink: FC<Props> = ({ text, color, variant, navigate, sx }) => {
  const [width, setWidth] = useState(0);

  return (
    <Box sx={{ width: 'fit-content', ...sx }}>
      <Typography
        variant={variant}
        sx={{
          color,
          width: 'fit-content',
          cursor: 'pointer',
          textDecoration: { xs: 'underline', md: 'none' }
        }}
        onMouseOver={() => {
          setWidth(100);
        }}
        onClick={navigate}
        onMouseOut={() => {
          setWidth(0);
        }}>
        {text}
        <Divider
          sx={{
            borderColor: color,
            width: { xs: '0%', md: `${width}%` },
            transition: { xs: 'none', md: 'width 500ms ease' }
          }}
        />
      </Typography>
    </Box>
  );
};

export default InteractiveLink;
