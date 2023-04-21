import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: #333333;
  background-color: rgba(51, 51, 51, 0.95);
  z-index: 11;

  & > div {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledMessageBox = styled.div`
  background-color: white;
  width: 85%;
  max-width: 400px;
  border-radius: 8px;

  & > div {
    padding: 1.5rem;

    &:nth-of-type(1),
    &:nth-of-type(3) {
      background-color: #d7e1ec;
    }

    &:nth-of-type(1) {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    &:nth-of-type(3) {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  h2 {
    font-size: 25px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }

    &.save {
      color: #fefefe;
      background-color: #7cb4f0;

      &:hover {
        background-color: #3a70a9;
      }
    }

    &.caution {
      color: #fefefe;
      background-color: #f54957;

      &:hover {
        background-color: #ca3a46;
      }
    }

    &.cancel {
      color: #333333;
      background-color: #f9f9f9;

      &:hover {
        color: #fefefe;
        background-color: #b1b1b1;
      }
    }
  }
`;
