import React, { useState } from 'react';
import { StyledListTitle, StyledTitleEditor } from './styles/ListTitle.styled';
import EditIcon from './icons/EditIcon';

const defaultTitle = 'Click here to enter a title';

const ListTitle = ({ title, onTitleChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editTitle = () => {
    return isEditing ? null : setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    onTitleChange(e.target.value);
  };

  const handleTitleInputBlur = (e) => {
    if (e.target.value === '') {
      onTitleChange('');
      // - This will also trigger a modal to display, telling user that the title
      //   cannot be left blank.
    } else if (e.target.value !== '') {
      onTitleChange(e.target.value);
    }
    setIsEditing(false);
  };

  return (
    <StyledListTitle isValid={title !== '' ? true : false}>
      {isEditing ? (
        <StyledTitleEditor
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e)}
          onBlur={(e) => handleTitleInputBlur(e)}
          onFocus={(e) => e.target.select()}
          autoFocus
        />
      ) : (
        <h2 onClick={editTitle}>{title === '' ? defaultTitle : title}</h2>
      )}
      <span onClick={editTitle}>
        <EditIcon />
      </span>
    </StyledListTitle>
  );
};

export default ListTitle;
