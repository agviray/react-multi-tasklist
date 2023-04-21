import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUpdatedList } from '../actions';
import { StyledListButton } from './styles/ListButton.styled';

const ListButton = ({ selectedList, saveUpdatedList }) => {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect in ListButton component ran.');

    if (selectedList.wasAltered === true) {
      setIsAvailable(true);
    }
  }, [selectedList.wasAltered]);

  const saveList = (list) => {
    if (!isAvailable) {
      return;
    } else {
      saveUpdatedList(list);
      navigate('/');
    }
  };

  return (
    <StyledListButton
      className={`${isAvailable ? '' : 'disabled'}`}
      onClick={() => saveList(selectedList)}
    >
      Save
    </StyledListButton>
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
