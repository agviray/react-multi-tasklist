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
  width: 95%;

  & > div {
    padding: 1.5rem;

    &:nth-of-type(1),
    &:nth-of-type(3) {
      background-color: #e7e7e7;
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

  @media screen and (min-width: 335px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
  }

  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    text-align: center;

    &:hover {
      cursor: pointer;
    }

    &:nth-of-type(1) {
      color: #fefefe;
      background-color: #f54957;
    }

    &:nth-of-type(2) {
      background-color: #f9f9f9;
    }
  }
`;
