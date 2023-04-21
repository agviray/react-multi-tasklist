import styled from 'styled-components';

export const StyledListCard = styled.div`
  position: relative;
  height: 250px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.3s ease;

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
    transform: scale(1.05);
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    &:nth-of-type(1) {
      gap: 10px;
      background-color: #f9f9f9;
    }

    &:nth-of-type(2) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 40px;

      p {
        color: #b3b3b3;
      }
    }
  }

  & h2 {
    font-size: 20px;
    overflow-wrap: break-word;
    color: ${({ isTitleBlank }) => (isTitleBlank ? '#b3b3b3' : '#333333')};
  }

  & ul {
    padding: 1rem 1rem;
    overflow-wrap: break-word;

    & li {
      list-style-type: disc;
      margin-left: 21px;

      & > span {
        display: block;
        padding-left: 5px;
      }

      &:not(:last-child) {
        padding-bottom: 1rem;
      }
    }
  }
`;

export const StyledCompletedItem = styled.div`
  position: relative;
  padding-bottom: 1rem;

  & > span {
    position: absolute;
    top: 2.5px;
    left: 0;
  }

  & div {
    position: relative;
    display: inline-block;
    padding-left: 25px;
  }
`;
