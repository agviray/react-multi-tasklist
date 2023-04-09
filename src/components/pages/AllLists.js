import React from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../ListCard';
import { StyledAllLists } from '../styles/AllLists.styled';

const AllLists = ({ lists }) => {
  return (
    <StyledAllLists>
      {lists.map((list, index) => (
        <Link to={`/list/${list.title}`} state={list} key={index}>
          <ListCard list={list} />
        </Link>
      ))}
    </StyledAllLists>
  );
};

export default AllLists;
