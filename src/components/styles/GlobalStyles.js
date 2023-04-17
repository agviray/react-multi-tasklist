import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-width: 300px;
  color: #333333
  font-size: 16px;
  line-height: 1.6;
}

header {
  height: 90.5px;
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
