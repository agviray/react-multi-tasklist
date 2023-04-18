import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../actions';
import { StyledListTitle, StyledTitleEditor } from './styles/ListTitle.styled';
import EditIcon from './icons/EditIcon';

const defaultTitle = 'Click here to enter a title';

const ListTitle = ({ selectedList, updateTitle }) => {
  const [title, setTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedList.title !== '') {
      setTitle(selectedList.title);
    }
  }, [selectedList.title]);

  const editTitle = () => {
    return isEditing ? null : setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleInputBlur = (e) => {
    if (e.target.value === '') {
      updateTitle('');
      // - This will also trigger a modal to display, telling user that the title
      //   cannot be left blank.
    } else if (e.target.value !== '') {
      updateTitle(e.target.value);
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

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
  };
};

export default connect(mapStateToProps, {
  updateTitle: updateTitle,
})(ListTitle);
