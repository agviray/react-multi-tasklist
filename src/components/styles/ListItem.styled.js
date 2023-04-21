import styled from 'styled-components';

export const StyledListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.75rem 0.5rem;
  border-bottom: solid #d3d3d3 1px;

  &.menuActive {
    background-color: #d2e6ff;
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
  padding: 0.5rem 1rem;
  overflow-wrap: break-word;

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

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 5px #a4a4a4;
  }
`;

export const StyledItemEditor = styled.textarea`
  width: 90%;
  padding: 10px 12px;
  font-size: 15px;
  border-style: none;
  outline: none;
  resize: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    color: #333333;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
