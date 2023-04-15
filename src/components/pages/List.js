import React from 'react';
import { connect } from 'react-redux';
import ListTitle from '../ListTitle';
import ListItemAdder from '../ListItemAdder';
import ListItemCollection from '../ListItemCollection';

const List = ({ selectedList }) => {
  return (
    <div>
      <ListTitle title={selectedList.title} />
      <ListItemAdder />
      <ListItemCollection items={selectedList.items} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
  };
};

export default connect(mapStateToProps)(List);
