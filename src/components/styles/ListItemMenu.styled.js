import styled from 'styled-components';

export const StyledListItemMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 30%;
  min-width: 200px;
  background-color: white;
  z-index: 1;

  ul {
    padding: 0.5rem 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1rem;
      color: #333333;

      &:hover {
        cursor: default;
        color: white;
        background-color: black;
      }
    }
  }
`;
