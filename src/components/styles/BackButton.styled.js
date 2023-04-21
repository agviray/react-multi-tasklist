import styled from 'styled-components';

export const StyledBackButton = styled.span`
  position: relative;
  display: inline-block;
  padding: 1rem 0.75rem;

  &::before {
    position: relative;
    top: 1px;
    left: 0;
    display: inline-block;
    content: '';
    width: 12px;
    height: 12px;
    margin-right: 2px;
    border: solid #333333;
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
  }

  &:hover {
    cursor: pointer;
  }
`;
