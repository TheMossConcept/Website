const useAppearingText = (textVisibilityPercentage: number, percentageOfPageVisible: number) => {
  const opacityIncreaseFactor = 100 / (100 - textVisibilityPercentage);

  return (percentageOfPageVisible - textVisibilityPercentage / 100) * opacityIncreaseFactor;
};

export default useAppearingText;
