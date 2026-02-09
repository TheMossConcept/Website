import React, { FC } from 'react';
import PageShell from '../utilities/PageShell';
import PurposePage from '../subpages/PurposePage';

const Purpose: FC = () => {
  return (
    <PageShell withLoading>
      {/* We would inline this component here but it causes a lot of typescript errors so for now
          this is a practical workaround */}
      <PurposePage />
    </PageShell>
  );
};

export default Purpose;
