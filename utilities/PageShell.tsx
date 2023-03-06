import React, { FC } from 'react';

import theme from '../utilities/theme';

import { ThemeProvider } from '@mui/material/styles';
import useYScroll, { ScrollContext } from '../utilities/useYScroll';
import LoadingLogo from '../components/LoadingLogo';
import Topbar from '../components/Topbar';

type Props = { withLoading?: boolean };

const PageShell: FC<Props> = ({ children, withLoading = false }) => {
  const yScroll = useYScroll();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ScrollContext.Provider value={yScroll}>
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
        </ScrollContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default PageShell;
