import React from 'react';
import { useLocation } from 'react-router-dom';
import ListTitle from '../ListTitle';
import ListItems from '../ListItems';

const List = () => {
  const location = useLocation();
  const { title, items } = location.state;

  return (
    <div>
      <ListTitle title={title} />
      <ListItems items={items} />
    </div>
  );
};

export default List;
