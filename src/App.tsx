import { FC } from 'react';
import Topbar from './components/Topbar';
import Frontpage from './pages/frontpage/Frontpage';
import ConceptPage from './pages/ConceptPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingLogo from './components/LoadingLogo';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Frontpage />
    },
    {
      path: '/concept',
      element: (
        <LoadingLogo>
          <ConceptPage />
        </LoadingLogo>
      )
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
