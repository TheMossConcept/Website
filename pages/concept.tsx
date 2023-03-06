import React, { FC } from 'react';
import PageShell from '../utilities/PageShell';
import ConceptPage from '../subpages/ConceptPage';

const Concept: FC = () => {
  return (
    <PageShell withLoading>
      {/* We would inline this component here but it causes a lot of typescript errors so for now
          this is a practical workaround */}
      <ConceptPage />
    </PageShell>
  );
};

export default Concept;
