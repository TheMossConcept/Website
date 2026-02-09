import { Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container sx={{ bgcolor: 'text.secondary', maxWidth: '100vw', overflowX: 'hidden' }}>
      {children}
    </Grid>
  );
};

export default PageContainer;
