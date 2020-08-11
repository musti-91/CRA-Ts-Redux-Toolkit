import { createGlobalStyle } from 'styled-components';
import './normalize.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: Helvetica, sans-serif
  }
  body {
    margin: 0;
  }

  p {
    line-hight: 1.5
  }
  `;
