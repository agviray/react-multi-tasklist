import React from 'react';
import BackButton from './BackButton';
import ListButton from './ListButton';
import { StyledListHeaderContent } from './styles/ListPageHeaderContent.styled';

const ListPageHeaderContent = () => {
  return (
    <StyledListHeaderContent>
      <BackButton />
      <ListButton />
      <span>. . .</span>
    </StyledListHeaderContent>
  );
};

export default ListPageHeaderContent;
