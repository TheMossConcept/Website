import { FC } from 'react';
import Topbar from './components/Topbar';
import Frontpage from './pages/frontpage/Frontpage';
import ConceptPage from './pages/ConceptPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingLogo from './components/LoadingLogo';
import { Box } from '@mui/material';

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
    }
  ]);

  return (
    <Box sx={{ bgcolor: 'text.secondary' }}>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
