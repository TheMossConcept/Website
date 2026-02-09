import React, { FC, PropsWithChildren } from 'react';

import theme from '../utilities/theme';

import { ThemeProvider } from '@mui/material/styles';
import LoadingLogo from '../components/LoadingLogo';
import Topbar from '../components/Topbar';

type Props = { withLoading?: boolean } & PropsWithChildren;

const PageShell: FC<Props> = ({ children, withLoading = false }) => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {withLoading ? (
          <LoadingLogo>
            <Topbar />
            {children}
          </LoadingLogo>
        ) : (
          <>
            <Topbar />
            {children}
          </>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default PageShell;
