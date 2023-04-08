import React from 'react';
import { useLocation } from 'react-router-dom';

const List = () => {
  const location = useLocation();
  const { selectedList } = location.state;
  return (
    <div>
      <h2>{selectedList.title}</h2>
      {selectedList.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default List;
