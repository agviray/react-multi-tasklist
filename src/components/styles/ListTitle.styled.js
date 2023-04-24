import styled from 'styled-components';

export const StyledListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  h2 {
    flex: 1;
    display: inline-block;
    width: 90%;
    height: 100%;
    padding: 10px 12px;
    color: ${({ isValid }) => (isValid ? '#333333' : '#b3b3b3')};
    font-size: 20px;
    overflow-wrap: break-word;
    box-shadow: none;
    transition: box-shadow 0.3s ease;

    &:hover {
      cursor: pointer;
      box-shadow: inset 0 0 5px #a4a4a4;
    }
  }
`;

export const StyledTitleEditor = styled.div`
  flex: 1;
  display: inline-block;
  width: 90%;
  box-shadow: ${({ isEditing }) =>
    isEditing ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' : 'none'};

  input {
    width: 100%;
    height: 52px;
    padding: 10px 12px;
    font-size: 20px;
    border: none;
    outline: none;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  padding-top: 10px;

  & > span {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
