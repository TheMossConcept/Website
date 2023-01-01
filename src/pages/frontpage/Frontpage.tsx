import { FC, useEffect, useState } from 'react';

import InitialSection from './InitialSection';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import { Grid, Typography } from '@mui/material';

const Frontpage: FC = () => {
  const [scrollY, setScollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Grid container>
      <InitialSection scrollY={scrollY} />
      <FirstSection scrollY={scrollY} />
      <SecondSection scrollY={scrollY} />
    </Grid>
  );
};

export default Frontpage;
