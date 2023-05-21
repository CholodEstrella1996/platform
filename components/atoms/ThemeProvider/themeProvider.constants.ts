const typography = {
  name: 'Open Sans',
  src: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
  weight: {
    regular: '400',
    semibold: '600',
    bold: '700',
  },
}

const colors = {
  alert: {
    success: '#178343',
    error: '#EA3F3F',
    warning: '#DDAD00',
    info: '',
    default: '',
  },

  learningAreas: {
    blue: '#2037AA',
    green: '#7ED321',
    lightBlue: '#4A90E2',
    orange: '#FBA600',
    pink: '#CD4486',
    purple: '#841C99',
    yellow: '#F8E71C',
  },

  primary: {
    900: '#001378',
    800: '#041988',
    700: '#0B229A',
    600: '#2037AA',
    500: '#3C50B5',
    400: '#3071D2',
    300: '#669AE8',
    200: '#A5C6F7',
    100: '#E6F1FE',
  },

  science: {
    900: '#128400',
    800: '#1B9C06',
    700: '#26AD10',
    600: '#51BE1E',
    500: '#7ED321',
    400: '#8BE824',
    300: '#A2E559',
    200: '#BBFF5B',
    100: '#EEF9DB',
  },
  technology: {
    900: '#315E94',
    800: '#3669A5',
    700: '#3C75B7',
    600: '#4382CB',
    500: '#4A90E2',
    400: '#519EF9',
    300: '#5AAEFF',
    200: '#84CDFF',
    100: '#DCF4FF',
  },
  engineering: {
    900: '#571264',
    800: '#601470',
    700: '#6B177C',
    600: '#77198A',
    500: '#841C99',
    400: '#A022B9',
    300: '#BC5CCF',
    200: '#D07CE0',
    100: '#FAE0FF',
  },
  mathematics: {
    900: '#B07300',
    800: '#C38000',
    700: '#DDAD00',
    600: '#F8C81C',
    500: '#F8E71C',
    400: '#FBFA31',
    300: '#FFFF6E',
    200: '#FFFFA2',
    100: '#FFFFDC',
  },

  neutrals: {
    900: '#323A48',
    800: '#37414F',
    700: '#3E4858',
    600: '#445062',
    500: '#4C596D',
    400: '#657388',
    300: '#7F8DA3',
    200: '#B0BAC9',
    100: '#D8DFE9',
    50: '#F5F5FB',
    white: '#FFFFFF',
  },

  semantic: {
    success: '#128400',
    warning: '#DDAD00',
    danger: '#EA3F3F',
  },
}

const gradients = {
  primary1: 'linear-gradient(68.13deg, #364bb9 21.57%, #669ae8 78.75%)',
  primary2: 'linear-gradient(90deg, #0b229a 0%, #3071d2 100%)',
  science: 'linear-gradient(204.59deg, #bbff5b 0.44%, #1b9c06 83.59%)',
  technology: 'linear-gradient(202.51deg, #b6d2f0 11.31%, #618bb8 81.46%)',
  engineering: 'linear-gradient(204.09deg, #dc7dee 8.45%, #9c31b2 85.07%)',
  mathematics: 'linear-gradient(205.48deg, #fffe43 7.66%, #f8c81c 66.87%)',
}

const mediaQueries = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
}

export type Theme = typeof theme
export const theme = { colors, gradients, mediaQueries, typography }
