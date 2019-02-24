import { createGlobalStyle } from 'styled-components';
import { theme } from '@smooth-ui/core-sc';

export const GlobalStyle = createGlobalStyle`
  @font-face: 
  {
    font-family: 'Open Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Open+Sans');
  }
  
  html {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default {
  ...theme,
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  primary: '#2aba90',
  colors: {
    bgPrimary: '#2aba90',
    bgSecondary: '#00abbd',
    bgLight: '#FBFBFB',
    bg: '#f6f5f6',
    border: '#EBEBEB',
  },
  fonts: {
    sans: 'Open Sans, sans-serif'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  }
};
