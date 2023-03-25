import { Typography, TypographyProps } from '@mui/material';
import { FC, RefObject, useContext, useLayoutEffect, useState } from 'react';
import { ScrollContext } from '../../utilities/useYScroll';
import useAppearingText from '../../utilities/useAppearingText';
import useIsMobile from '../../utilities/useIsMobile';

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

  const globalYScroll = useContext(ScrollContext);
  const [localYScroll, setLocalYScroll] = useState<number>();

  useLayoutEffect(() => {
    if (containerRef?.current) {
      setLocalYScroll(globalYScroll - containerRef.current.offsetTop);
    }
  }, [globalYScroll, containerRef]);

  const headlineOpacity = useAppearingText(containerRef, 20, isMobile ? 2.5 : 1.2);

  const textTransformValue = localYScroll ? localYScroll / (isMobile ? 50 : 25) : 0;
  const textTransformValueNegated = textTransformValue * -1;

  const fontSize = isMobile ? { fontSize: '40px' } : {};

  return (
    <>
      <span>
        {firstLineText.map((textBit) => (
          <Typography
            key={textBit.text}
            color={textBit.color}
            variant={textBit.variant}
            component="span"
            sx={{
              opacity: headlineOpacity,
              display: 'inline-block',
              transform: `translate(${textTransformValue}px)`,
              ...fontSize
            }}>
            {textBit.text}&nbsp;
          </Typography>
        ))}
      </span>
      <br />
      <span style={{ marginLeft }}>
        {secondLineText.map((textBit) => (
          <Typography
            key={textBit.text}
            color={textBit.color}
            variant={textBit.variant}
            component="span"
            sx={{
              opacity: headlineOpacity,
              display: 'inline-block',
              transform: `translate(${textTransformValueNegated}px)`,
              ...fontSize
            }}>
            {textBit.text}&nbsp;
          </Typography>
        ))}
      </span>
    </>
  );
};

export default HeadlineSection;
