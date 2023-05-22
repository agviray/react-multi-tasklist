import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/index';
import {
  StyledListItem,
  StyledItemDefault,
  StyledItemEditor,
} from './styles/ListItem.styled';
import ListItemMenu from './ListItemMenu';
import Checkmark from './icons/Checkmark';
import ItemMenuIcon from './icons/ItemMenuIcon';

const ListItem = ({ itemId, task, isComplete, updateItem }) => {
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
    <>
      <StyledItemDefault
        className={isComplete ? 'complete' : ''}
        onClick={() => (isComplete ? null : editItem(true))}
      >
        {isComplete ? (
          <>
            <span>
              <Checkmark iconColor={'#50bda1'} />
            </span>

            <div>{text}</div>
          </>
        ) : (
          <>{text}</>
        )}
      </StyledItemDefault>
    </>
  );

  const itemEditor = (
    <StyledItemEditor isEditing={isEditing}>
      <textarea
        value={text}
        onChange={(e) => handleItemChange(e)}
        onBlur={(e) => handleItemTextareaBlur(e)}
        onFocus={(e) => resizeEditor(e)}
        autoFocus
      />
    </StyledItemEditor>
  );

  return (
    <>
      <StyledListItem className={isMenuActive ? 'menuActive' : ''}>
        {isEditing ? itemEditor : defaultItemDisplay}
        <div
          ref={iconRef}
          className={'iconContainer'}
          onClick={() => handleIconClick()}
        >
          <ItemMenuIcon iconColor={isMenuActive ? '#493f96' : '#7b6cf6'} />
        </div>
        <ListItemMenu
          itemId={itemId}
          isComplete={isComplete}
          isMenuActive={isMenuActive}
        />
      </StyledListItem>
    </>
  );
};

export default connect(null, {
  updateItem: updateItem,
})(ListItem);
