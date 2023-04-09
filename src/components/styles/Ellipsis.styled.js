import styled from 'styled-components';

export const StyledEllipsis = styled.span`
  position: relative;
  width: 30px;
  height: 3px;
  padding: 1rem 0;

  &::before,
  &::after {
    display: inline-block;
    content: '';
    position: absolute;
    top: 50%;
    width: 3px;
    height: 3px;
    margin-top: -2px;
    border-radius: 50%;
    background-color: #333333;
  }

  &::before {
    left: 4px;
  }

  &::after {
    right: 4px;
  }
`;

export const Ellipse = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 13.5px;
  width: 3px;
  height: 3px;
  margin-top: -2px;
  background-color: #333333;
  border-radius: 50%;
`;
