import styled from 'styled-components';

export const StyledListItemAdder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2rem;
  font-size: 16px;

  & > span {
    &:nth-of-type(1) {
      display: inline-block;
      width: 80%;
      box-shadow: ${({ doesInputHaveFocus }) =>
        doesInputHaveFocus
          ? `rgba(0, 0, 0, 0.35) 0px 5px 15px`
          : `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`};

      input {
        width: 100%;
        padding: 10px 12px;
        font-size: 16px;
        color: ${({ hasDefaultText }) =>
          hasDefaultText ? '#a4a4a4' : '#333333'};
        border-style: none;
        outline: none;

        &:focus {
          color: #333333;
        }
      }
    }

    &:nth-of-type(2) {
      flex: 1;
      display: inline-flex;
      align-items: center;
      color: white;
      background-color: #7b6cf6;

      &:hover {
        cursor: pointer;
        background-color: #493f96;
      }

      span {
        display: inline-block;
        width: 100%;
        text-align: center;
      }
    }
  }
`;
