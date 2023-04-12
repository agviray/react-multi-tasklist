import React, { useState, useEffect } from 'react';
import { StyledListTitle, StyledTitleEditor } from './styles/ListTitle.styled';
import EditIcon from './icons/EditIcon';

const defaultTitle = 'Click here to enter a title';

const ListTitle = ({ title, onTitleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(defaultTitle);

  useEffect(() => {
    if (title !== '') {
      setCurrentTitle(title);
    }
  }, [title]);

  const editTitle = () => {
    return isEditing ? null : setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setCurrentTitle(e.target.value);
  };

  const handleTitleInputBlur = (e) => {
    if (e.target.value === '') {
      setCurrentTitle(defaultTitle);
      // - This will also trigger a modal to display, telling user that the title
      //   cannot be left blank.
    } else if (e.target.value !== '') {
      setCurrentTitle(e.target.value);
      addNewTitle(e.target.value);
    }
    setIsEditing(false);
  };

  const addNewTitle = (titleToAdd) => {
    onTitleChange(titleToAdd);
  };

  return (
    <StyledListTitle
      isDefaultTitle={currentTitle === defaultTitle ? true : false}
    >
      {isEditing ? (
        <StyledTitleEditor
          type="text"
          value={currentTitle}
          onChange={(e) => handleTitleChange(e)}
          onBlur={(e) => handleTitleInputBlur(e)}
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
