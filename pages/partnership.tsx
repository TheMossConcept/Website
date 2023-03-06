import React, { FC } from 'react';
import PageShell from '../utilities/PageShell';
import PartnershipPage from '../subpages/PartnershipPage';

const Partnership: FC = () => {
  return (
    <PageShell withLoading>
      {/* We would inline this component here but it causes a lot of typescript errors so for now
          this is a practical workaround */}
      <PartnershipPage />
    </PageShell>
  );
};

export default Partnership;
