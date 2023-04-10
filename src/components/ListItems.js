import React from 'react';
import { StyledListItems } from './styles/ListItems.styled';

const ListItems = ({ items }) => {
  return (
    <StyledListItems>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledListItems>
  );
};

export default ListItems;
