import React from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../ListCard';
import { StyledAllLists } from '../styles/AllLists.styled';

const AllLists = ({ lists }) => {
  return (
    <StyledAllLists>
      {lists.map((list, index) => (
        <div key={index}>
          <ListCard list={list} />
        </div>
      ))}
    </StyledAllLists>
  );
};

export default AllLists;
