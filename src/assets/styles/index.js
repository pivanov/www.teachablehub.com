import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  *:focus,
  textarea:focus,
  input:focus,
  button:focus {
    outline: none;
  }

  html, body {
    padding: 0;
    margin: 0;
    color: #333;
    height: 100%;
    background: #fff;
    font-family: "Ubuntu", sans-serif;
  }

  #svgSprite {
    display: none;
    pointer-events: none;
  }

  #root {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }

  #root-extras {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2000;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }
`;
