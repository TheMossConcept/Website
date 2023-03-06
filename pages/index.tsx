import React, { FC } from 'react';

import Topbar from '../components/Topbar';
import Frontpage from '../frontpage/Frontpage';

import PageShell from '../utilities/PageShell';

const IndexPage: FC = () => {
  return (
    <PageShell>
      <Topbar />
      <Frontpage />
    </PageShell>
  );
};

export default IndexPage;
