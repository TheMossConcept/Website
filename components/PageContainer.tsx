import { Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  // TODO: The background color should come from the theme!
  return (
    <Grid container sx={{ bgcolor: 'text.secondary', maxWidth: '100vw', overflowX: 'hidden' }}>
      {children}
    </Grid>
  );
};

export default PageContainer;
