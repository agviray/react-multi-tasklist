import styled from 'styled-components';

export const StyledListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.75rem 0;
  border-bottom: solid #d3d3d3 1px;

  .iconContainer {
    display: inline-block;
    position: absolute;
    top: 23.3px;
    right: 0;
  }
`;

export const StyledItemDefault = styled.div`
  display: inline-block;
  width: 90%;
  padding: 0.5rem 0;
  overflow-wrap: break-word;

  &:hover {
    cursor: pointer;
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
