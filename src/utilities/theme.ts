import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#383838'
    },
    primary: {
      main: '#4467C1',
      transparent: 'rgba(68, 103, 193, 0.75)'
    },
    secondary: {
      main: '#383838',
      transparent: 'rgba(56, 56, 56, 0.75)'
    },
    text: {
      primary: 'rgba(248, 246, 243, 0.75)',
      secondary: '#F8F6F3'
    }
  },
  spacing: 8,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          'PoppinsBig-h1': 'h1',
          'PoppinsBig-h2': 'h2',
          'PoppinsBig-body': 'span',
          'PoppinsBig-button': 'span',
          'PoppinsBig-subtitle2': 'h2',
          'PoppinsSmall-h1': 'h1',
          'PoppinsSmall-body': 'span',
          'PoppinsSmall-button': 'span',
          'PoppinsSmall-subtitle2': 'h2',
          'TobiasBig-h1': 'h2',
          'TobiasBig-h2': 'h2',
          'TobiasBig-subtitle1': 'h2',
          'TobiasSmall-h1': 'h1',
          'TobiasSmall-subtitle1': 'h2'
        }
      }
    }
  },
  typography: {
    'PoppinsBig-h1': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 105,
      lineHeight: '110%',
      letterSpacing: 0
    },
    'PoppinsBig-h2': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 76,
      lineHeight: '100%'
    },
    'PoppinsBig-subtitle2': {
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: '120%'
    },
    'PoppinsBig-body': {
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      fontSize: 20,
      lineHeight: '130%'
    },
    'PoppinsBig-button': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '120%'
    },
    'PoppinsSmall-h1': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 45,
      lineHeight: '110%',
      letterSpacing: 0
    },
    'PoppinsSmall-subtitle2': {
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '120%',
      letterSpacing: 0.5
    },
    'PoppinsSmall-body': {
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '140%'
    },
    'PoppinsSmall-button': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '120%'
    },
    'TobiasBig-h1': {
      fontFamily: 'Tobias',
      fontWeight: 500,
      fontSize: 105,
      lineHeight: '100%'
    },
    'TobiasBig-h2': {
      fontFamily: 'Tobias',
      fontWeight: 600,
      fontSize: 72,
      lineHeight: '100%'
    },
    'TobiasBig-subtitle1': {
      fontFamily: 'Tobias',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '120%',
      letterSpacing: 0.5
    },
    'TobiasSmall-h1': {
      fontFamily: 'Tobias',
      fontWeight: 500,
      fontSize: 48,
      lineHeight: '100%'
    },
    'TobiasSmall-subtitle1': {
      fontFamily: 'Tobias',
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: '120%',
      letterSpacing: 0.5
    }
  }
});

export default theme;