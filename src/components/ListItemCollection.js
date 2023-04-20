import React from 'react';
import { connect } from 'react-redux';
import { StyledListItemCollection } from './styles/ListItemCollection.styled';
import ListItem from './ListItem';

const ListItemCollection = ({ selectedList }) => {
  return (
    <StyledListItemCollection>
      {selectedList.items.map((item) => (
        <ListItem
          key={item.id}
          itemId={item.id}
          task={item.text}
          isComplete={item.isComplete}
        />
      ))}
    </StyledListItemCollection>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
  };
};

export default connect(mapStateToProps)(ListItemCollection);
