import React, { useState, useEffect } from 'react';
import {
  StyledListItem,
  StyledItemDefault,
  Icon,
  StyledItemEditor,
} from './styles/ListItem.styled';
import EditIcon from './icons/EditIcon';

const ListItem = ({ task }) => {
  const [text, setText] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const editItem = (status) => {
    setIsEditing(status);
  };

  const handleItemTextareaBlur = (e) => {
    setText(e.target.value);
    // - Invoke a callback that will update all items to store, with
    //   the updated item text.
    // - Need an id for every item, so that callback will know which item
    //   it will be replacing.
    editItem(false);
  };

  const handleItemChange = (e) => {
    setText(e.target.value);
  };

  const resizeEditor = (e) => {
    const box = e.target;
    box.style.height = `${box.scrollHeight}px`;
    e.target.select();
  };

  const defaultItemDisplay = (
    <StyledItemDefault onClick={() => editItem(true)}>{text}</StyledItemDefault>
  );

  const itemEditor = (
    <StyledItemEditor
      value={text}
      onChange={(e) => handleItemChange(e)}
      onBlur={(e) => handleItemTextareaBlur(e)}
      onFocus={(e) => resizeEditor(e)}
      autoFocus
    />
  );

  return (
    <StyledListItem>
      {isEditing ? itemEditor : defaultItemDisplay}
      <Icon onClick={() => editItem(true)}>
        <EditIcon />
      </Icon>
    </StyledListItem>
  );
};

export default ListItem;
