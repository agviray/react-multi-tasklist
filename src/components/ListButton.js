import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUpdatedList } from '../actions';
import { StyledListButton } from './styles/ListButton.styled';

const ListButton = ({ selectedList, saveUpdatedList }) => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    console.log('useEffect in ListButton component ran.');

    if (selectedList.wasAltered === true) {
      setIsAvailable(true);
    }
  }, [selectedList.wasAltered]);

  const saveList = (e, list) => {
    if (!isAvailable) {
      e.preventDefault();
      return;
    }
    saveUpdatedList(list);
  };

  return (
    <Link to="/" onClick={(e) => saveList(e, selectedList)}>
      <StyledListButton className={`${isAvailable ? '' : 'disabled'}`}>
        Save
      </StyledListButton>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
  };
};

export default connect(mapStateToProps, {
  saveUpdatedList: saveUpdatedList,
})(ListButton);
