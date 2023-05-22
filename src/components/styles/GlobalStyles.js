import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Metropolis Regular", Arial, Helvetica, sans-serif;
}

html {
  min-height: 100vh;
  background: rgb(250,250,250);
  background: linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(247,247,247,1) 52%, rgba(236,236,236,1) 100%);
}

body {
  min-width: 300px;
  margin: 0 auto;
  color: #333333;
  font-size: 16px;
  line-height: 1.6;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  margin: 0 auto;
  /* background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px); */background: radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #DB00FF 0%, #000000 100%), linear-gradient(45deg, #241E92 0%, #241E92 40%, #5432D3 40%, #5432D3 50%, #7B6CF6 50%, #7B6CF6 70%, #E5A5FF 70%, #E5A5FF 100%), linear-gradient(180deg, #01024E 0%, #01024E 43%, #543864 43%, #543864 62%, #8B4367 62%, #8B4367 80%, #FF6464 80%, #FF6464 100%);
background-blend-mode: overlay, hard-light, overlay, normal;
  z-index: 10;
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
