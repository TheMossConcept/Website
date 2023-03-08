import { RefObject, useContext, useLayoutEffect, useState } from 'react';
import { ScrollContext } from '../utilities/useYScroll';

const useAppearingText = (
  containerRef: RefObject<HTMLElement>,
  textVisibilityPercentage: number,
  opacityIncreaseFactor = 1.5
) => {
  // This is just to be able to trigger the layout effect every time we scroll
  const scrollY = useContext(ScrollContext);
  const [percentageOfPageVisible, setPercentageOfPageVisible] = useState<number>(0);

  useLayoutEffect(() => {
    if (containerRef?.current) {
      const containerBoundingRect = containerRef.current.getBoundingClientRect();
      setPercentageOfPageVisible(
        (containerBoundingRect.height / containerBoundingRect.bottom) * 100
      );
    }
  }, [containerRef, scrollY]);

  // Don't start show anything until we hit the specified percentage of the page visible. When we do,
  // the opacity is whatever percentage of the page that is visible above that divided by 100
  // (70 - 30) / 100 = 0.4 for a page that is 70 % visible with a textVisibilityPercentage of 30.
  // times the opacity increase factor
  return ((percentageOfPageVisible - textVisibilityPercentage) / 100) * opacityIncreaseFactor;
};

export default useAppearingText;