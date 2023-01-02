import { useEffect, useState } from 'react';

const useYScroll = () => {
  const [scrollY, setScollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export default useYScroll;
