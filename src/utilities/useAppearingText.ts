import { RefObject, useLayoutEffect, useState } from 'react';

const useAppearingText = (
  textVisibilityPercentage: number,
  globalYScroll: number,
  containerRef: RefObject<HTMLElement>
) => {
  const [percentageOfPageVisible, setPercentageOfScreenVisible] = useState<number>(0);

  useLayoutEffect(() => {
    if (containerRef?.current) {
      setPercentageOfScreenVisible(globalYScroll / containerRef.current.offsetTop);
    }
  }, [globalYScroll, containerRef]);

  const opacityIncreaseFactor = 100 / (100 - textVisibilityPercentage);

  return (percentageOfPageVisible - textVisibilityPercentage / 100) * opacityIncreaseFactor;
};

export default useAppearingText;
