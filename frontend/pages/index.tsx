import React, { FC, useEffect } from 'react';

import Frontpage from '../frontpage/Frontpage';

import PageShell from '../utilities/PageShell';

const IndexPage: FC = () => {
  // Always bring us to the top when refreshing
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <PageShell>
      <Frontpage />
    </PageShell>
  );
};

export default IndexPage;
