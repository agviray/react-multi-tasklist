import styled from 'styled-components';

export const StyledListItemMenu = styled.div`
  position: absolute;
  top: 55px;
  right: -4px;
  width: 30%;
  min-width: 200px;
  background-color: white;
  z-index: 1;

  &:after {
    content: '';
    border-top: 0;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid white;
    border-left: 0.5rem solid transparent;
    position: absolute;
    top: -0.5rem;
    right: 14px;
  }

  ul {
    padding: 0.5rem 0;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 20px 3px;

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
