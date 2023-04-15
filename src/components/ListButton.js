import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUpdatedList } from '../actions';
import { StyledListButton } from './styles/ListButton.styled';

const ListButton = ({ selectedList, saveUpdatedList }) => {
  const saveList = (list) => {
    saveUpdatedList(list);
  };
  return (
    <Link to="/" onClick={() => saveList(selectedList)}>
      <StyledListButton>Save</StyledListButton>
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
