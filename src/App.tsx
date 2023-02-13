import { FC, createContext } from 'react';
import Topbar from './components/Topbar';
import Frontpage from './pages/frontpage/Frontpage';
import ConceptPage from './pages/subpages/ConceptPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingLogo from './components/LoadingLogo';
import { Box } from '@mui/material';
import PartnershipPage from './pages/subpages/PartnershipPage';
import PurposePage from './pages/subpages/PurposePage';
import useYScroll from './utilities/useYScroll';

export const ScrollContext = createContext(0);

const App: FC = () => {
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
        <LoadingLogo>
          <Topbar />
          <ConceptPage />
        </LoadingLogo>
      )
    },
    {
      path: '/partnership',
      element: (
        <LoadingLogo>
          <Topbar />
          <PartnershipPage />
        </LoadingLogo>
      )
    },
    {
      path: '/purpose',
      element: (
        <LoadingLogo>
          <Topbar />
          <PurposePage />
        </LoadingLogo>
      )
    }
  ]);

  const yScroll = useYScroll();

  return (
    <ScrollContext.Provider value={yScroll}>
      <Box>
        <RouterProvider router={router} />
      </Box>
    </ScrollContext.Provider>
  );
};

export default App;
