import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import InteractiveLink from './InteractiveLink';

type Props = { isOpenState: [boolean, Dispatch<SetStateAction<boolean>>] };

// TODO: Introduce strong typing on link so it's always connected to the link in App
type NavigationItemProps = { text: string; link: string };

const NavigationItem: FC<NavigationItemProps> = ({ text, link }) => {
  const navigate = useNavigate();

  return (
    <InteractiveLink
      text={text}
      navigate={() => navigate(link)}
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
  const [isOpen, setIsOpen] = isOpenState;
  // Always start in the closed state, as we need to change the value to trigger the transition
  const [rightPosition, setRightPosition] = useState('-50%');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setRightPosition('0%');
      setOpacity(0.75);
    } else {
      setRightPosition('-50%');
      setOpacity(0);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Box
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
          width: '50%',
          height: '100%',
          bgcolor: 'secondary.main',
          transition: 'right 500ms cubic-bezier(0,0,0.58,1)'
        }}>
        <Grid container sx={{ mt: '27.7px', mr: '32px', ml: '126px', width: 'auto' }}>
          <Grid item xs style={{ textAlign: 'right' }}>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4} sx={{ mt: '8.26%' }}>
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
                <NavigationItem text="Contact" link="/contact" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: '13.65%' }}>
            <Grid container>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <BottomItem text="Twitter" />
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
