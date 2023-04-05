import { Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  // TODO: The background color should come from the theme!
  return (
    <Grid container sx={{ bgcolor: '#F9F7F4', maxWidth: '100vw', overflowX: 'hidden' }}>
      {children}
    </Grid>
  );
};

export default PageContainer;
