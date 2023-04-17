import styled from 'styled-components';

export const StyledListCard = styled.div`
  position: relative;
  height: 250px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  &:hover {
    cursor: default;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    &:nth-of-type(1) {
      gap: 10px;
      background-color: #f9f9f9;
    }

    &:nth-of-type(2) {
      flex-direction: column;
      justify-content: center;
      padding-top: 40px;
    }
  }

  & h2 {
    font-size: 20px;
    overflow-wrap: break-word;
  }

  & ul {
    padding: 1rem 2rem;
    overflow-wrap: break-word;

    & li {
      list-style-type: disc;

      &:not(:last-child) {
        padding-bottom: 1rem;
      }
    }
  }
`;
