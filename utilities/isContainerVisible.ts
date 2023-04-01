import { RefObject } from 'react';

const isContainerVisible = (container: RefObject<HTMLElement>, yScoll: number) => {
  const containerBoundingRect = container.current?.getBoundingClientRect();

  if (containerBoundingRect) {
    const topOfContainer = containerBoundingRect.top;
    const bottomOfContainer = containerBoundingRect.bottom;

    console.log(`Top of container: ${topOfContainer}`);
    console.log(`Bottom of container: ${bottomOfContainer}`);
    console.log(`yScoll: ${yScoll}`);
    console.log(`isContainerVisible: ${yScoll >= topOfContainer && yScoll <= bottomOfContainer}`);

    return yScoll >= topOfContainer && yScoll <= bottomOfContainer;
  } else {
    false;
  }
};

export default isContainerVisible;
