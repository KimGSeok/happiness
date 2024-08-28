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
    '--deactive-color': '#BFBFBF',
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
    fontSize: '16px',
    color: 'var(--black200)',
  },
  html: {
    width: '100vw',
    padding: '0 10vw',

    '@media (max-width: 480px)': {
      fontSize: '10px',
    },

    '@media (min-width: 768px)': {
      fontSize: '14px',
    },
  },
  body: {
    position: 'relative',
    height: 'calc(var(--vh, 1vh) * 100)',
    background: 'url(/default_white_background.svg) no-repeat center center',
    backgroundSize: 'cover',
  }
})  