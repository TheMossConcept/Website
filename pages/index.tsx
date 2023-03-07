import React, { FC } from 'react';

import Frontpage from '../frontpage/Frontpage';

import PageShell from '../utilities/PageShell';

const IndexPage: FC = () => {
  return (
    <PageShell>
      <Frontpage />
    </PageShell>
  );
};

export default IndexPage;
