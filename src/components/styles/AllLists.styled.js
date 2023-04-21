import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledAllLists = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 100%);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 100px 2rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 100%));
  }

  @media screen and (min-width: 950px) {
    grid-template-columns: repeat(3, minmax(0, 100%));
  }
`;

export const StyledRouterLink = styled(Link)`
  display: inline-block;
  cursor: default;
`;
