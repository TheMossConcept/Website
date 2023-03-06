import React, { FC } from 'react';

import theme from '../utilities/theme';

import Topbar from '../components/Topbar';
import Frontpage from '../frontpage/Frontpage';

import { ThemeProvider } from '@mui/material/styles';
import useYScroll, { ScrollContext } from '../utilities/useYScroll';

const IndexPage: FC = () => {
  const yScroll = useYScroll();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ScrollContext.Provider value={yScroll}>
          <Topbar />
          <Frontpage />
        </ScrollContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
