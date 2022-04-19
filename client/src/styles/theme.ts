export interface ThemeProps {
  theme: typeof theme;
}

export const theme = {
  colors: {
    body: '#2B2B2B',
    brand: '#F8D57E',
    brandSecondary: '#BFAFF2',
    textPrimary: '#FDFDFD',
    textSecondary: '#3B393C',
  },
  fontSize: {
    h1Size: '90px',
    h2Size: '64px',
    h3Size: '45px',
    h4Size: '32px',
    h5Size: '23px',
    pSize: '16px',
    buttonSize: '18px',
    linkSize: '18px',
  },
  fontWeight: {
    regular: '400',
    semiBold: '600',
    bold: '700',
  },
  device: {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    tabletMin: `(min-width: 768px)`,
    tabletMax: `(max-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
    signupMax: `(max-width: 866px)`,
  },
};
