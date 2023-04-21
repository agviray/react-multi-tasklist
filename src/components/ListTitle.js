import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../actions';
import {
  StyledListTitle,
  StyledTitleEditor,
  IconContainer,
} from './styles/ListTitle.styled';
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
    } else if (e.target.value !== '') {
      updateTitle(e.target.value);
    }
    setIsEditing(false);
  };

  const handleKeypressEnter = (e) => {
    if (e.key === 'Enter') {
      handleTitleInputBlur(e);
    }
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
          onKeyPress={(e) => handleKeypressEnter(e)}
          autoFocus
        />
      ) : (
        <h2 onClick={editTitle}>{title === '' ? defaultTitle : title}</h2>
      )}
      <IconContainer>
        <span onClick={editTitle}>
          <EditIcon iconColor={isEditing ? '#3a70a9' : '#7cb4f0'} />
        </span>
      </IconContainer>
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
