import styled from 'styled-components';

export const StyledListButton = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: #d3d3d3;

  &.disabled {
    color: #cacaca;
    background-color: #efefef;

    &:hover {
      cursor: not-allowed;
    }
  }
`;
