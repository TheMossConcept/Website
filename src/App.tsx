import { FC, createContext, useEffect } from 'react';
import Topbar from './components/Topbar';
import Frontpage from './pages/frontpage/Frontpage';
import ConceptPage from './pages/subpages/ConceptPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingLogo from './components/LoadingLogo';
import { Box } from '@mui/material';
import PartnershipPage from './pages/subpages/PartnershipPage';
import PurposePage from './pages/subpages/PurposePage';
import useYScroll from './utilities/useYScroll';
import allImages from './assets/Images/allImages';

export const ScrollContext = createContext(0);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Topbar />
        <Frontpage />
      </>
    )
  },
  {
    path: '/concept',
    element: (
      <LoadingLogo key="concept">
        <Topbar />
        <ConceptPage />
      </LoadingLogo>
    )
  },
  {
    path: '/partnership',
    element: (
      <LoadingLogo key="partnership">
        <Topbar />
        <PartnershipPage />
      </LoadingLogo>
    )
  },
  {
    path: '/purpose',
    element: (
      <LoadingLogo key="purpose">
        <Topbar />
        <PurposePage />
      </LoadingLogo>
    )
  }
]);

const App: FC = () => {
  const yScroll = useYScroll();

  useEffect(() => {
    allImages.forEach((imageSrc) => {
      const image = new Image();
      image.src = imageSrc;
    });
  }, []);

  return (
    <ScrollContext.Provider value={yScroll}>
      <Box>
        <RouterProvider router={router} />
      </Box>
    </ScrollContext.Provider>
  );
};

export default App;
