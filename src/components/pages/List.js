import React from 'react';
import { StyledList } from '../styles/List.styled';
import ListTitle from '../ListTitle';
import ListItemAdder from '../ListItemAdder';
import ListViewToggler from '../ListViewToggler';
import ListView from '../ListView';

const List = () => {
  console.log('List page re-rendered.');

  return (
    <StyledList>
      <ListTitle />
      <ListItemAdder />
      <ListViewToggler />
      <ListView />
    </StyledList>
  );
};

export default List;
