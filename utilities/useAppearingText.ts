import { RefObject, useContext, useLayoutEffect, useState } from 'react';
import { ScrollContext } from '../utilities/useYScroll';
import useIsMobile from './useIsMobile';

const useAppearingText = (
  containerRef: RefObject<HTMLElement>,
  textVisibilityPercentage: number,
  opacityIncreaseFactor = 1.5
) => {
  // This is just to be able to trigger the layout effect every time we scroll
  const [percentageOfPageVisible, setPercentageOfPageVisible] = useState<number>(0);
  const scrollY = useContext(ScrollContext);

  const isMobile = useIsMobile();
  const rectifiedOpacityIncreaseFactor = isMobile
    ? opacityIncreaseFactor / 2
    : opacityIncreaseFactor;

  // Don't start show anything until we hit the specified percentage of the page visible. When we do,
  // the opacity is whatever percentage of the page that is visible above that divided by 100
  // (70 - 30) / 100 = 0.4 for a page that is 70 % visible with a textVisibilityPercentage of 30.
  // times the opacity increase factor
  const opacity =
    ((percentageOfPageVisible - textVisibilityPercentage) / 100) * rectifiedOpacityIncreaseFactor;

  useLayoutEffect(() => {
    if (containerRef?.current && opacity < 1) {
      const containerBoundingRect = containerRef.current.getBoundingClientRect();
      const newPercentageOfPageVisible =
        (containerBoundingRect.height / containerBoundingRect.bottom) * 100;

      if (newPercentageOfPageVisible >= textVisibilityPercentage) {
        setPercentageOfPageVisible(newPercentageOfPageVisible);
      }
    }
  }, [containerRef, scrollY]);

  return opacity;
};

export default useAppearingText;
