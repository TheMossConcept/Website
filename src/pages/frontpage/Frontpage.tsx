import { FC, useEffect, useState } from 'react';

import Topbar from '../../components/Topbar';
import InitialSection from './InitialSection';
import FirstSection from './FirstSection';

const Frontpage: FC = () => {
  const [scrollY, setScollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Topbar />
      <InitialSection scrollY={scrollY} />
      <FirstSection scrollY={scrollY} />
    </>
  );
};

export default Frontpage;