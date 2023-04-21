import React from 'react';
import { connect } from 'react-redux';
import { selectList } from '../actions/index';
import { StyledAllLists, StyledRouterLink } from './styles/AllLists.styled';
import ListCard from './ListCard';

const AllLists = ({ allLists, selectList }) => {
  const viewSelectedList = (selected) => {
    selectList(selected);
  };

  return (
    <StyledAllLists>
      {allLists.map((list) => (
        <StyledRouterLink
          onClick={() => viewSelectedList(list)}
          to={list.title === '' ? '/list/New List' : `/list/${list.title}`}
          key={list.id}
        >
          <ListCard list={list} />
        </StyledRouterLink>
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
