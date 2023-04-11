import styled from 'styled-components';

export const StyledListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    display: inline-block;
    width: 90%;
    height: 100%;
    padding: 10px 12px;
    color: #333333;
    font-size: 20px;
    overflow-wrap: break-word;
    box-shadow: none;
    transition: box-shadow 0.3s ease, color 0.3s ease;

    &:hover {
      cursor: default;
      box-shadow: inset 0 0 5px #a4a4a4;
    }
  }

  & > span {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const StyledTitleEditor = styled.input`
  width: 90%;
  height: 52px;
  padding: 10px 12px;
  font-size: 20px;
  border: none;
  outline: none;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
