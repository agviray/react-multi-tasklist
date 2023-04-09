import React from 'react';
import BackButton from './BackButton';
import { StyledListHeaderContent } from './styles/ListPageHeaderContent.styled';

const ListPageHeaderContent = () => {
  return (
    <StyledListHeaderContent>
      <BackButton />
      <span>Save</span>
      <span>. . .</span>
    </StyledListHeaderContent>
  );
};

export default ListPageHeaderContent;
