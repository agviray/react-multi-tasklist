import styled from 'styled-components';

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: solid #d3d3d3 1px;
`;

export const StyledItemDefault = styled.div`
  width: 90%;
  padding: 10px 12px;
  overflow-wrap: break-word;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
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
