import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  :root {
    --primary: #1fd561;
    --black: #000000;
    --background: #141414;
    --blackLighter: #9e9e9e;
    --grayLight: #f5f5f5;
    --grayMedium: #e5e5e5;
    --white: #ffffff;
    --frontEnd: #60DAFB;
    --backEnd: #00c86f;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
