import { RefObject } from 'react';

const calculateOpacity = (
  containerRef: RefObject<HTMLElement>,
  textVisibilityPercentage: number,
  opacityIncreaseFactor = 1.5
) => {
  // Don't start show anything until we hit the specified percentage of the page visible. When we do,
  // the opacity is whatever percentage of the page that is visible above that divided by 100
  // (70 - 30) / 100 = 0.4 for a page that is 70 % visible with a textVisibilityPercentage of 30.
  // times the opacity increase factor

  if (containerRef?.current) {
    const containerBoundingRect = containerRef.current.getBoundingClientRect();
    const percentageOfPageVisible =
      (containerBoundingRect.height / containerBoundingRect.bottom) * 100;
    const newOpacity =
      ((percentageOfPageVisible - textVisibilityPercentage) / 100) * opacityIncreaseFactor;

    // const opacityChangeIsMeaningful = newOpacity <= 1 && newOpacity >= 0;

    if (percentageOfPageVisible >= textVisibilityPercentage) {
      return newOpacity;
    } else {
      return 0;
    }
  }

  // Default to 1 if the containerRef.current is not defined as full visibility is much less disruptive than it being fully hidden!
  return 1;
};

export default calculateOpacity;
