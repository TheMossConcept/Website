import { Box, Grid } from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import InteractiveLogo from './interactive-icons/InteractiveLogo';
import InteractiveMenuIcon from './interactive-icons/InteractiveMenuIcon';
import NavigationMenu from './NavigationMenu';

const Topbar: FC = () => {
  const [navigationMenuIsOpen, setNavigationMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 'appBar' }}>
        <Grid item xs={12} sx={{ mt: 4, mx: 4 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <InteractiveLogo height={50} width={106.5} onClick={() => navigate('/')} />
            </Grid>
            <Grid item>
              <InteractiveMenuIcon
                width={29}
                height={16}
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
