import { useLayoutEffect, useState } from 'react';

const useYScroll = () => {
  const [scrollY, setScollY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export default useYScroll;
