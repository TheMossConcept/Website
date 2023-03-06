import { Grid } from '@mui/material';
import { FC } from 'react';

const PageContainer: FC = ({ children }) => {
  return (
    <Grid container sx={{ bgcolor: 'text.secondary', maxWidth: '100vw', overflowX: 'hidden' }}>
      {children}
    </Grid>
  );
};

export default PageContainer;
