import React from 'react';
import ListTitle from '../ListTitle';
import ListItemAdder from '../ListItemAdder';
import ListItemCollection from '../ListItemCollection';

const List = () => {
  console.log('useEffect ran in List page');

  return (
    <div>
      <ListTitle />
      <ListItemAdder />
      <ListItemCollection />
    </div>
  );
};

export default List;
