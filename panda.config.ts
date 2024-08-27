import { defineConfig } from "@pandacss/dev";
import { globalStyles } from "./src/styles/globalStyles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xxs: '320px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      keyframes: {
        unfold: {
          '0%': {
            transform: 'scaleY(0.1)',
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
          },
          '50%': {
            transform: 'scaleY(0.5)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          },
          '100%': {
            transform: 'scaleY(1)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          },
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: 'react',

  globalCss: globalStyles
});
