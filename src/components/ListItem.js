import React, { useState, useEffect } from 'react';
import { StyledListItem } from './styles/ListItem.styled';

const ListItem = ({ task }) => {
  const [text, setText] = useState(task);

  return <StyledListItem>{text}</StyledListItem>;
};

export default ListItem;
