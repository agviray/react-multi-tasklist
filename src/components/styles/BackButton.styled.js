import styled from 'styled-components';

export const StyledBackButton = styled.span`
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #333333;
  border-radius: 5px;

  &::before {
    position: relative;
    top: -1px;
    left: 0;
    display: inline-block;
    content: '';
    width: 7px;
    height: 7px;
    margin-right: 2px;
    border: solid #333333;
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
  }

  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;

    &:before {
      border: solid white;
      border-width: 0 0 2px 2px;
    }
  }
`;
