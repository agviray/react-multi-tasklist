import React from 'react';
import BackButton from './BackButton';
import ListButton from './ListButton';
import Ellipsis from './Ellipsis';
import { StyledListHeaderContent } from './styles/ListPageHeaderContent.styled';

const ListPageHeaderContent = () => {
  return (
    <StyledListHeaderContent>
      <div>
        <BackButton />
      </div>
      <div>
        <ListButton />
      </div>
      {/* <Ellipsis /> */}
    </StyledListHeaderContent>
  );
};

export default ListPageHeaderContent;
