import { Typography, TypographyProps } from '@mui/material';
import { FC, RefObject, useEffect, useState, memo } from 'react';
import useIsMobile from '../../utilities/useIsMobile';
import calculateOpacity from '../../utilities/calculateOpacity';

type TextWithMetadata = {
  text: string;
} & Pick<TypographyProps, 'color' | 'variant'>;

export type HeadlineSectionProps = {
  containerRef: RefObject<HTMLElement>;
  firstLineText: TextWithMetadata[];
  secondLineText: TextWithMetadata[];
  marginLeft?: string;
};

const HeadlineSection: FC<HeadlineSectionProps> = ({
  containerRef,
  firstLineText,
  secondLineText,
  marginLeft = '18%'
}) => {
  const isMobile = useIsMobile();

  const [localYScroll, setLocalYScroll] = useState<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef?.current) {
        const globalYScroll = window.scrollY;
        setLocalYScroll(globalYScroll - containerRef.current.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineOpacity = calculateOpacity(containerRef, 20, isMobile ? 2.5 : 1.2);

  const textTransformValue = localYScroll ? localYScroll / (isMobile ? 50 : 25) : 0;
  const textTransformValueNegated = textTransformValue * -1;

  const fontSize = isMobile ? { fontSize: '40px' } : {};

  return (
    <>
      <span>
        {firstLineText.map((textBit, index) => (
          <Typography
            key={textBit.text}
            color={textBit.color}
            variant={textBit.variant}
            component="span"
            sx={{
              opacity: headlineOpacity,
              display: 'inline-block',
              marginLeft: index === 0 ? `${textTransformValue}px` : undefined,
              ...fontSize
            }}>
            {textBit.text}&nbsp;
          </Typography>
        ))}
      </span>
      <br />
      <span style={{ marginLeft }}>
        {secondLineText.map((textBit, index) => (
          <Typography
            key={textBit.text}
            color={textBit.color}
            variant={textBit.variant}
            component="span"
            sx={{
              opacity: headlineOpacity,
              display: 'inline-block',
              marginLeft: index === 0 ? `${textTransformValueNegated}px` : undefined,
              ...fontSize
            }}>
            {textBit.text}&nbsp;
          </Typography>
        ))}
      </span>
    </>
  );
};

export default memo(HeadlineSection);
