import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html {
  min-height: 100vh;
  background: rgb(215,225,236);
  background: linear-gradient(24deg, rgba(215,225,236,1) 0%, rgba(255,255,255,1) 61%);
}

body {
  min-width: 300px;
  max-width: 1300px;
  margin: 0 auto;
  color: #333333;
  font-size: 16px;
  line-height: 1.6;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  max-width: 1300px;
  margin: 0 auto;
  background: rgba(215, 225, 236, 0.8);
  backdrop-filter: blur(5px);
  z-index: 10;
  
  @media screen and (min-width: 1200px) {
    top: 16px;
    border-radius: 15px;
    }
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-indent: 0;
}

a {
  text-decoration: none;
  color: #333333;
}

  `;

export default GlobalStyles;
