import React, { useState } from 'react';
import { StyledListTitle, StyledTitleEditor } from './styles/ListTitle.styled';
import EditIcon from './icons/EditIcon';

const ListTitle = ({ title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  const editTitle = () => {
    return isEditing ? null : setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setCurrentTitle(e.target.value);
  };

  const handleTitleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <StyledListTitle>
      {isEditing ? (
        <StyledTitleEditor
          type="text"
          value={currentTitle}
          onChange={(e) => handleTitleChange(e)}
          onBlur={handleTitleInputBlur}
          onFocus={(e) => e.target.select()}
          autoFocus
        />
      ) : (
        <h2 onClick={editTitle}>{currentTitle}</h2>
      )}
      <span onClick={editTitle}>
        <EditIcon />
      </span>
    </StyledListTitle>
  );
};

export default ListTitle;
