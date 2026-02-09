import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import InteractiveLogo from './interactive-icons/InteractiveLogo';
import InteractiveMenuIcon from './interactive-icons/InteractiveMenuIcon';
import NavigationMenu from './NavigationMenu';

const Topbar: FC = () => {
  const [navigationMenuIsOpen, setNavigationMenuIsOpen] = useState(false);

  const router = useRouter();

  const handleLogoPress = () => {
    if (router.pathname === '/') {
      router.reload();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 'appBar' }}>
        <Grid item xs={12} sx={{ mt: 4, mx: 4 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <InteractiveLogo height={75} width={133} onClick={handleLogoPress} />
            </Grid>
            <Grid item>
              <InteractiveMenuIcon
                width={44}
                height={24}
                onClick={() => setNavigationMenuIsOpen((previousValue) => !previousValue)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <NavigationMenu isOpenState={[navigationMenuIsOpen, setNavigationMenuIsOpen]} />
    </>
  );
};

export default Topbar;
