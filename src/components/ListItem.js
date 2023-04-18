import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/index';
import {
  StyledListItem,
  StyledItemDefault,
  StyledItemEditor,
} from './styles/ListItem.styled';
import ListItemMenu from './ListItemMenu';
import ItemMenuIcon from './icons/ItemMenuIcon';

const ListItem = ({ itemId, task, updateItem }) => {
  const [text, setText] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const onBodyClick = (e) => {
      const iconContainer = iconRef.current;
      if (iconContainer.contains(e.target)) {
        return;
      }
      setIsMenuActive(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const editItem = (status) => {
    setIsEditing(status);
  };

  const handleItemTextareaBlur = (e) => {
    setText(e.target.value);
    updateItem(itemId, e.target.value);
    editItem(false);
  };

  const handleItemChange = (e) => {
    setText(e.target.value);
  };

  const handleIconClick = () => {
    setIsMenuActive(true);
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
      <div
        ref={iconRef}
        className={'iconContainer'}
        onClick={() => handleIconClick()}
      >
        <ItemMenuIcon isMenuActive={isMenuActive} />
      </div>
      <ListItemMenu itemId={itemId} isMenuActive={isMenuActive} />
    </StyledListItem>
  );
};

export default connect(null, {
  updateItem: updateItem,
})(ListItem);
