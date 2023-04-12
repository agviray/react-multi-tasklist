import React from 'react';
import { StyledListItemCollection } from './styles/ListItemCollection.styled';
import ListItem from './ListItem';

const ListItemCollection = ({ items }) => {
  return (
    <StyledListItemCollection>
      {items.map((item, index) => (
        <ListItem key={index} task={item} />
      ))}
    </StyledListItemCollection>
  );
};

export default ListItemCollection;
