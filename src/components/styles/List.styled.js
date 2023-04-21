import styled from 'styled-components';

export const StyledList = styled.div`
  position: relative;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 2rem 150px 2rem;
  background-color: white;

  @media screen and (min-width: 700px) {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
