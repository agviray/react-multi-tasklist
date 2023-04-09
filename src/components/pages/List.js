import React from 'react';
import { useLocation } from 'react-router-dom';

const List = () => {
  const location = useLocation();
  const { title, items } = location.state;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
