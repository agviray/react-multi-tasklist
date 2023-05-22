import { createGlobalStyle } from 'styled-components';
import MetropolisRegular from '../../fonts/metropolis-regular.otf';

const GlobalFonts = createGlobalStyle`

@font-face {
  font-family: "Metropolis Regular";
  src: url(${MetropolisRegular});
}
`;

export default GlobalFonts;
