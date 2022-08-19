import { FC, useEffect, useState } from 'react';
import LoadingLogo from './components/LoadingLogo';
import NavigationMenu from './components/NavigationMenu';
import Topbar from './components/Topbar';
import Frontpage from './pages/Frontpage';
import FrontpageSection from './pages/FrontpageSection';

const App: FC = () => {
  const [scrollY, setScollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log(`ScrollY: ${scrollY}`);

  return (
    <>
      <Topbar />
      {/* <LoadingLogo /> */}
      {/*<Frontpage scrollY={scrollY} />
      <FrontpageSection scrollY={scrollY} />*/}
      <NavigationMenu isOpen />
    </>
  );
};

export default App;
