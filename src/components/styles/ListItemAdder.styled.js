import styled from 'styled-components';

export const StyledListItemAdder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2rem;
  font-size: 15px;

  input {
    width: 80%;
    padding: 10px 12px;
    color: ${({ hasDefaultText }) => (hasDefaultText ? '#a4a4a4' : '#333333')};
    border-style: none;
    outline: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:focus {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      color: #333333;
    }
  }

  & > span {
    flex: 1;
    display: inline-flex;
    align-items: center;
    color: white;
    background-color: #0066ff;

    &:hover {
      cursor: default;
    }

    span {
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }
`;
