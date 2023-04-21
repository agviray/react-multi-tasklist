import styled from 'styled-components';

export const StyledHeaderContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 1.75rem 0;
  border-radius: inherit;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: ${({ isTransitionApplied }) => (isTransitionApplied ? '1' : '0')};
    box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.16);
    z-index: -1;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }

  h1 {
    text-align: center;
    font-size: 30px;
  }
`;
