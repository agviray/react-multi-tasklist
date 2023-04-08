import React from 'react';
import { Link } from 'react-router-dom';

const allLists = [
  {
    title: 'Numbers',
    items: ['1', '56', '0', '99'],
  },
  {
    title: 'Capital Letters',
    items: ['X', 'F', 'S', 'N', 'P', 'A'],
  },
  {
    title: 'Mammals',
    items: [
      'Blue Whale',
      'Grizzly Bear',
      'Wooly Mammoth',
      'Wolverine',
      'Bengal Tiger',
      'Sea Otter',
    ],
  },
  {
    title: 'Sea Creatures',
    items: [
      'Octopus',
      'Giant Squid',
      'Starfish',
      'Great White Shark',
      'Blue Crab',
      'Tiger Shark',
      'Clownfish',
      'Baracuda',
      'Redfish',
    ],
  },
];

const AllLists = () => {
  const renderLists = (lists) => {
    return lists.map((list, index) => (
      <li key={index}>
        <Link to={`/list/${list.title}`} state={{ selectedList: list }}>
          {list.title}
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <h2>All Lists Page</h2>
      <ul>{renderLists(allLists)}</ul>
    </div>
  );
};

export default AllLists;
