import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InteractiveLink from './InteractiveLink';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';

type Props = { isOpenState: [boolean, Dispatch<SetStateAction<boolean>>] };

type ActivityProp = { link: string } | { onClick: () => void };

// TODO: Introduce strong typing on link so it's always connected to the link in App
type NavigationItemProps = { text: string } & ActivityProp;

const NavigationItem: FC<NavigationItemProps> = ({ text, ...props }) => {
  useEffect(() => {
    // TODO: Stop hardcoding it here and get it from a central key vault instead
    ReactGA.initialize('G-HK91WGVFW0');
  }, []);
  const router = useRouter();

  return (
    <InteractiveLink
      text={text}
      navigate={() => {
        if ('link' in props) {
          ReactGA.send({
            hitType: 'pageView',
            page: props.link,
            title: 'Visited page using navigation menu'
          });
          router.push(props.link);
        } else {
          props.onClick();
        }
      }}
      variant="PoppinsSmall-h1"
      color="text.primary"
    />
  );
};

type BottomItemProps = { text: string };

const BottomItem: FC<BottomItemProps> = ({ text }) => {
  return (
    <Typography
      sx={{ color: 'text.primary', fontFamily: 'Poppins', fontWeight: 'normal', fontSize: 14 }}>
      {text}
    </Typography>
  );
};

const NavigationMenu: FC<Props> = ({ isOpenState }) => {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('md');

  const [isOpen, setIsOpen] = isOpenState;
  // Always start in the closed state, as we need to change the value to trigger the transition
  const [rightPosition, setRightPosition] = useState(isMobile ? '-100%' : '-50%');
  const [opacity, setOpacity] = useState(0);

  const router = useRouter();
  const handleContactClick = async () => {
    await router.push('/');
    console.log(window.document.body.scrollHeight);
    window.scrollTo({ top: window.document.body.scrollHeight - 900, behavior: 'auto' });

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setRightPosition('0%');
      setOpacity(0.75);
    } else {
      setRightPosition(isMobile ? '-100%' : '-50%');
      setOpacity(0);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Box
          onClick={() => setIsOpen(false)}
          sx={{
            opacity,
            bgcolor: 'secondary.main',
            transition: 'opacity 750ms ease',
            // We only want the overlay to cover the part that is not the navigation menu
            width: '100%',
            height: '100%',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 'drawer'
          }}
        />
      )}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          zIndex: 'modal',
          right: rightPosition,
          width: { xs: '100%', md: '50%' },
          height: '100%',
          bgcolor: 'secondary.main',
          transition: 'right 500ms cubic-bezier(0,0,0.58,1)'
        }}>
        <Grid container sx={{ mt: 3, mr: 4, ml: { xs: 4, md: 16 }, width: 'auto' }}>
          <Grid item xs style={{ textAlign: 'right' }}>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Grid>
          <Grid
            container
            item
            xs={12}
            direction="column"
            justifyContent="space-between"
            sx={{ height: '80vh', mt: isMobile ? 8 : 16 }}>
            <Grid container item spacing={4}>
              <Grid item xs={12}>
                <NavigationItem text="Concept" link="/concept" />
              </Grid>
              <Grid item xs={12}>
                <NavigationItem text="Partnership" link="/partnership" />
              </Grid>
              <Grid item xs={12}>
                <NavigationItem text="Purpose" link="/purpose" />
              </Grid>
              <Grid item xs={12}>
                <NavigationItem text="Contact" onClick={handleContactClick} />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <BottomItem text="LinkedIn" />
                  </Grid>
                  <Grid item xs={12}>
                    <BottomItem text="Instagram" />
                  </Grid>
                  <Grid item xs={12}>
                    <BottomItem text="Facebook" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <BottomItem text="Cookies" />
                  </Grid>
                  <Grid item xs={12}>
                    <BottomItem text="Privacy policy" />
                  </Grid>
                  <Grid item xs={12}>
                    <BottomItem text="Terms" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NavigationMenu;
