import React from 'react';
import { StyledListTitle } from './styles/ListTitle.styled';

const ListTitle = ({ title }) => {
  return (
    <StyledListTitle>
      <h2>{title}</h2>
    </StyledListTitle>
  );
};

export default ListTitle;
