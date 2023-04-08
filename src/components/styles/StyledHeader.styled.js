import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.75rem;
  background-color: white;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: ${({ isTransitionApplied }) => (isTransitionApplied ? '1' : '0')};
    box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.16);
    transition: opacity 0.3s ease;
  }

  h1 {
    text-align: center;
    font-size: 30px;
  }
`;
