import styled from 'styled-components';

export const StyledListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.75rem 0.5rem;
  border-bottom: solid #d3d3d3 1px;
  transition: background-color 0.3s ease;

  &.menuActive {
    background-color: #f3f8ff;
  }

  .iconContainer {
    display: inline-block;
    position: absolute;
    top: 23.3px;
    right: 8px;
  }
`;

export const StyledItemDefault = styled.div`
  display: inline-block;
  width: 90%;
  min-height: 41.59px;
  padding: 0.5rem 1rem;
  overflow-wrap: break-word;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 5px #a4a4a4;
  }

  &.complete {
    display: flex;
    align-items: center;

    & > span {
      &:nth-of-type(1) {
        position: absolute;
        top: 22px;
        left: 8px;
      }
    }

    & > div {
      display: inline-block;
      overflow-wrap: break-word;
      padding-left: 20px;
    }

    &:hover {
      cursor: default;
      box-shadow: none;
    }
  }
`;

export const StyledItemEditor = styled.div`
  display: inline-block;
  width: 90%;
  box-shadow: ${({ isEditing }) =>
    isEditing
      ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      : 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'};

  textarea {
    width: 100%;
    padding: 10px 12px;
    font-size: 16px;
    border-style: none;
    outline: none;
    resize: none;
  }

  &:focus {
    color: #333333;
  }
`;
