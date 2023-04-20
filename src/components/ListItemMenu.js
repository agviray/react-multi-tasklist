import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteItem, markItemComplete } from '../actions';
import { StyledListItemMenu } from './styles/ListItemMenu.styled';
import Checkmark from './icons/Checkmark';
import Trashcan from './icons/Trashcan';

const ListItemMenu = ({
  itemId,
  isMenuActive,
  markItemComplete,
  deleteItem,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [checkmarkColor, setCheckmarkColor] = useState('#333333');
  const [trashcanColor, setTrashcanColor] = useState('#333333');

  useEffect(() => {
    if (isMenuActive === true) {
      setIsActive(true);
    } else if (isMenuActive === false) {
      setIsActive(false);
    }
  }, [isMenuActive]);

  const markItemAsComplete = (itemId) => {
    markItemComplete(itemId);
  };

  const deleteItemFromList = (itemId) => {
    deleteItem(itemId);
  };

  return isActive ? (
    <StyledListItemMenu>
      <ul>
        <li
          onMouseEnter={() => setCheckmarkColor('white')}
          onMouseLeave={() => setCheckmarkColor('#333333')}
          onClick={() => markItemAsComplete(itemId)}
        >
          <span>Mark Complete</span>
          <Checkmark iconColor={checkmarkColor} />
        </li>
        <li
          onMouseEnter={() => setTrashcanColor('white')}
          onMouseLeave={() => setTrashcanColor('#333333')}
          onClick={() => deleteItemFromList(itemId)}
        >
          <span>Delete</span>
          <Trashcan iconColor={trashcanColor} />
        </li>
      </ul>
    </StyledListItemMenu>
  ) : null;
};

export default connect(null, {
  deleteItem: deleteItem,
  markItemComplete: markItemComplete,
})(ListItemMenu);
