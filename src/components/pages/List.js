import React from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions';
import ListTitle from '../ListTitle';
import ListItemAdder from '../ListItemAdder';
import ListItemCollection from '../ListItemCollection';

const List = ({ selectedList, updateTitle }) => {
  return (
    <div>
      <ListTitle title={selectedList.title} onTitleChange={updateTitle} />
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

export default connect(mapStateToProps, {
  updateTitle: updateTitle,
})(List);
