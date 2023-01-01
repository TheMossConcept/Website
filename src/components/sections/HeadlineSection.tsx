import { Typography, TypographyProps } from '@mui/material';
import { FC, RefObject, useEffect, useState } from 'react';
import useAppearingText from '../../utilities/useAppearingText';

type TextWithMetadata = {
  text: string;
} & Pick<TypographyProps, 'color' | 'variant'>;

type Props = {
  globalYScroll: number;
  containerRef: RefObject<HTMLElement>;
  firstLineText: TextWithMetadata[];
  secondLineText: TextWithMetadata[];
  marginLeft?: string;
};

const HeadlineSection: FC<Props> = ({
  globalYScroll,
  containerRef,
  firstLineText,
  secondLineText,
  marginLeft = '18%'
}) => {
  const [localYScroll, setLocalYScroll] = useState<number>();
  const [percentageOfPageVisible, setPercentageOfScreenVisible] = useState<number>(0);

  useEffect(() => {
    if (containerRef?.current) {
      setPercentageOfScreenVisible(globalYScroll / containerRef.current.offsetTop);
    }
  }, [globalYScroll, containerRef]);

  useEffect(() => {
    if (containerRef?.current) {
      setLocalYScroll(globalYScroll - containerRef.current.offsetTop);
    }
  }, [globalYScroll, containerRef]);

  // Because there's no opacity for the first 35 % of the page!
  const headlineOpacity = useAppearingText(35, percentageOfPageVisible);

  const textTransformValue = localYScroll ? localYScroll / 20 : 0;
  const textTransformValueNegated = textTransformValue * -1;
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
              transform: `translate(${textTransformValue}px)`
            }}>
            {textBit.text}&nbsp;
          </Typography>
        ))}
      </span>
      {secondLineText.map((textBit) => (
        <Typography
          key={textBit.text}
          color={textBit.color}
          variant={textBit.variant}
          component="h1"
          sx={{
            ml: marginLeft,
            transform: `translate(${textTransformValueNegated}px)`,
            opacity: headlineOpacity
          }}>
          {textBit.text}&nbsp;
        </Typography>
      ))}
    </>
  );
};

export default HeadlineSection;
