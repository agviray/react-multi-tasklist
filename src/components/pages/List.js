import React from 'react';
import { useLocation } from 'react-router-dom';
import ListTitle from '../ListTitle';
import ListItemAdder from '../ListItemAdder';
import ListItemCollection from '../ListItemCollection';

const List = () => {
  const location = useLocation();
  const { title, items } = location.state;

  return (
    <div>
      <ListTitle title={title} />
      <ListItemAdder />
      <ListItemCollection items={items} />
    </div>
  );
};

export default List;
