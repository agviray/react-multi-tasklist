import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectList } from '../actions/index';
import { StyledAllLists } from './styles/AllLists.styled';
import ListCard from './ListCard';

const AllLists = ({ allLists, selectList }) => {
  const viewSelectedList = (selected) => {
    selectList(selected);
  };

  return (
    <StyledAllLists>
      {allLists.map((list) => (
        <Link
          onClick={() => viewSelectedList(list)}
          to={list.title === '' ? '/list/New List' : `/list/${list.title}`}
          key={list.id}
        >
          <ListCard list={list} />
        </Link>
      ))}
    </StyledAllLists>
  );
};

const mapStateToProps = (state) => {
  return {
    allLists: state.allLists,
  };
};

export default connect(mapStateToProps, {
  selectList: selectList,
})(AllLists);
