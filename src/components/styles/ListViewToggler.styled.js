import styled from 'styled-components';

export const StyledListViewToggler = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #f3f3f3;
  font-size: 14px;
  border-radius: 8px;

  & > div {
    display: inline-block;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      span {
        display: inline-block;
        padding: 0.25rem 1rem;
      }

      &:hover {
        cursor: pointer;
        background-color: #9c9c9c;
        color: white;
      }

      &.selected {
        background-color: black;
        color: white;
      }
    }
  }
`;
