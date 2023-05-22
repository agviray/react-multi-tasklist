import styled from 'styled-components';

export const StyledListButton = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  min-width: 80.57px;
  text-align: center;
  color: #fefefe;
  background-color: #5432d3;
  border: solid 1px #fefefe;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #493f96;
    border: solid 1px #493f96;
  }

  &.disabled {
    color: #cacaca;
    background-color: #efefef;
    border: 1px solid #efefef;

    &:hover {
      cursor: not-allowed;
    }
  }
`;
