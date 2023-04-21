import styled from 'styled-components';

export const StyledListButton = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  min-width: 80.57px;
  text-align: center;
  color: #fefefe;
  background-color: #7cb4f0;
  border: solid 1px #7cb4f0;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #3a70a9;
    border: solid 1px #3a70a9;
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
