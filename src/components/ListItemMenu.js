import React, { useState, useEffect } from 'react';
import { StyledListItemMenu } from './styles/ListItemMenu.styled';
import Checkmark from './icons/Checkmark';
import Trashcan from './icons/Trashcan';

const ListItemMenu = ({ itemId, isMenuActive }) => {
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

  const markItemComplete = (itemId) => {
    console.log(itemId);
    /*
    =============================================
    =============================================
    MARK ITEM AS COMPLETE
    =============================================
    =============================================
    */
    return;
  };

  const deleteItem = (itemId) => {
    console.log(itemId);
    /*
    *********************************************
    *********************************************
    DELETE ITEM FROM LIST
    *********************************************
    *********************************************
    */
    return;
  };

  return isActive ? (
    <StyledListItemMenu>
      <ul>
        <li
          onClick={() => markItemComplete(itemId)}
          onMouseEnter={() => setCheckmarkColor('white')}
          onMouseLeave={() => setCheckmarkColor('#333333')}
        >
          <span>Mark Complete</span>
          <Checkmark iconColor={checkmarkColor} />
        </li>
        <li
          onMouseEnter={() => setTrashcanColor('white')}
          onMouseLeave={() => setTrashcanColor('#333333')}
          onClick={() => deleteItem(itemId)}
        >
          <span>Delete</span>
          <Trashcan iconColor={trashcanColor} />
        </li>
      </ul>
    </StyledListItemMenu>
  ) : null;
};

export default ListItemMenu;
