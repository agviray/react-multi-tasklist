import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyledList } from '../styles/List.styled';
import ListTitle from '../ListTitle';
import ListItemAdder from '../ListItemAdder';
import ListViewToggler from '../ListViewToggler';
import ListView from '../ListView';

const List = ({ selectedList }) => {
  const [listInView, setListInView] = useState({});
  const navigate = useNavigate();

  // *** Issue and temp fix - part 1 of 2 ***
  // - The fix contains 2 parts. The useEffect below is part 1 of 2. The second part is in ListView.js
  // - Issue Details: List page breaks when manually refreshing from that page.
  // - The selectedList redux state is lost/resetted to initial empty obj value when List page is refreshed,
  //   resulting in errors in ListView (as methods are unable to be used on selectedList null/undefined properties).
  // - Temp fix is to navigate user to Home page if the List page is refreshed, however, their changes to the List
  //   will not be saved.
  useEffect(() => {
    if (Object.keys(selectedList).length !== 0) {
      setListInView({ ...selectedList });
    } else {
      navigate('/');
    }
  }, [selectedList]);

  return (
    <StyledList>
      <ListTitle />
      <ListItemAdder />
      <ListViewToggler />
      <ListView listInView={listInView} />
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
  };
};

export default connect(mapStateToProps)(List);
