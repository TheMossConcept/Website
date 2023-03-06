import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    // PoppinsBig
    'PoppinsBig-h1'?: React.CSSProperties;
    'PoppinsBig-h2'?: React.CSSProperties;
    'PoppinsBig-subtitle2'?: React.CSSProperties;
    'PoppinsBig-body'?: React.CSSProperties;
    'PoppinsBig-button'?: React.CSSProperties;

    // PoppinsSmall
    'PoppinsSmall-h1'?: React.CSSProperties;
    'PoppinsSmall-subtitle2'?: React.CSSProperties;
    'PoppinsSmall-body'?: React.CSSProperties;
    'PoppinsSmall-button'?: React.CSSProperties;

    // TobiasBig
    'TobiasBig-h1'?: React.CSSProperties;
    'TobiasBig-h2'?: React.CSSProperties;
    'TobiasBig-subtitle1'?: React.CSSProperties;

    // TobiasSmall
    'TobiasSmall-h1'?: React.CSSProperties;
    'TobiasSmall-subtitle1'?: React.CSSProperties;
  }
  interface TypographyOptions {
    // PoppinsBig
    'PoppinsBig-h1'?: React.CSSProperties;
    'PoppinsBig-h2'?: React.CSSProperties;
    'PoppinsBig-subtitle2'?: React.CSSProperties;
    'PoppinsBig-body'?: React.CSSProperties;
    'PoppinsBig-button'?: React.CSSProperties;

    // PoppinsSmall
    'PoppinsSmall-h1'?: React.CSSProperties;
    'PoppinsSmall-subtitle2'?: React.CSSProperties;
    'PoppinsSmall-body'?: React.CSSProperties;
    'PoppinsSmall-button'?: React.CSSProperties;

    // TobiasBig
    'TobiasBig-h1'?: React.CSSProperties;
    'TobiasBig-h2'?: React.CSSProperties;
    'TobiasBig-subtitle1'?: React.CSSProperties;

    // TobiasSmall
    'TobiasSmall-h1'?: React.CSSProperties;
    'TobiasSmall-subtitle1'?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    // PoppinsBig
    'PoppinsBig-h1': true;
    'PoppinsBig-h2': true;
    'PoppinsBig-subtitle2': true;
    'PoppinsBig-body': true;
    'PoppinsBig-button': true;

    // PoppinsSmall
    'PoppinsSmall-h1'?: true;
    'PoppinsSmall-subtitle2'?: true;
    'PoppinsSmall-body'?: true;
    'PoppinsSmall-button'?: true;

    // TobiasBig
    'TobiasBig-h1'?: true;
    'TobiasBig-h2'?: true;
    'TobiasBig-subtitle1'?: true;

    // TobiasSmall
    'TobiasSmall-h1'?: true;
    'TobiasSmall-subtitle1'?: true;
  }
}
