import { defineGlobalStyles } from "@pandacss/dev";

export const globalStyles = defineGlobalStyles({
  ':root': {
    '--white100': '#FFFFFF',
    '--black100': '#212121',
    '--black200': '#3B3B3B',
    '--black300': '#545454',
    '--black400': '#6E6E6E',
    '--black500': '#878787',
    '--black600': '#999999',
    '--black700': '#A6A6A6',
    '--black800': '#B3B3B3',
    '--black900': '#BFBFBF',
    '--black1000': '#CCCCCC',
    '--blue100': '#004C99',
    '--blue200': '#0059B2',
    '--blue300': '#0066CC',
    '--blue400': '#0072E5',
    '--blue500': '#007FFF',
    '--blue600': '#2993FF',
    '--blue700': '#52A8FF',
    '--blue800': '#7ABCFF',
    '--blue900': '#A3D1FF',
    '--blue1000': '#CCE5FF',
    '--red100': '#990008',
    '--red200': '#B2000A',
    '--red300': '#CC000B',
    '--red400': '#E5000D',
    '--red500': '#FF000E',
    '--red600': '#FF2935',
    '--red700': '#FF525B',
    '--red800': '#FF7A82',
    '--red900': '#FFA3A8',
    '--red1000': '#FFCCCF',
    '--green100': '#22772F',
    '--green200': '#288B36',
    '--green300': '#2D9F3E',
    '--green400': '#33B346',
    '--green500': '#38C74E',
    '--green600': '#58D06A',
    '--green700': '#78D986',
    '--green800': '#98E2A3',
    '--green900': '#B8EBBF',
    '--green1000': '#D7F4DC',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,

    '::-webkit-scrollbar': {
      scrollBehavior: 'smooth',
      display: 'none',
    },
  },
  'html, body': {
    fontSize: '14px',
    color: 'var(--white100)',

    '2xl':{
      fontSize: '16px',
    },
    xl: {
      fontSize: '16px',
    },
    lg: {
      fontSize: '14px'
    },
    md: {
      fontSize: '14px'
    },
    sm: {
      fontSize: '12px',
    },
  },
  html: {
    width: '100vw',
    height: '100vh',
    
    '2xl': {
      padding: '0 300px',
    },
    xl: {
      padding: '0 200px',
    },
    lg: {
      padding: '0 160px',
    },
    md: {
      padding: '0 96px',
    },
    sm: {
      padding: '0 24px',
    },
  },
  body: {
    background: 'url(/default_background.svg) no-repeat center center',
    backgroundSize: 'cover',
  }
})  