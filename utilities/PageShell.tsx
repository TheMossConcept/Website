import React, { FC } from 'react';

import theme from '../utilities/theme';

import { ThemeProvider } from '@mui/material/styles';
import useYScroll, { ScrollContext } from '../utilities/useYScroll';

const PageShell: FC = ({ children }) => {
  const yScroll = useYScroll();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ScrollContext.Provider value={yScroll}>{children}</ScrollContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default PageShell;
