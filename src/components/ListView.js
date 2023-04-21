import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  StyledListView,
  StyledListItemCollection,
} from './styles/ListView.styled';
import ListItem from './ListItem';

const ListView = ({ selectedList }) => {
  console.log('ListView re-rendered.');

  const currentViewItems = selectedList.items.filter((item) => {
    switch (selectedList.view) {
      case 'active':
        return item.isComplete !== true;
      case 'complete':
        return item.isComplete !== false;
      case 'all':
        return item;
      default:
        return null;
    }
  });

  const renderNoItemsMessage = (currentView) => {
    switch (currentView) {
      case 'active':
        return 'There are no active items in this list.';
      case 'complete':
        return 'There are no completed items in this list.';
      case 'all':
        return 'There are no items in this list.';
      default:
        return null;
    }
  };

  return (
    <StyledListView>
      {currentViewItems.length === 0 ? (
        <div>
          <p>{renderNoItemsMessage(selectedList.view)}</p>
        </div>
      ) : (
        <>
          <StyledListItemCollection>
            {currentViewItems.map((item) => (
              <ListItem
                key={item.id}
                itemId={item.id}
                task={item.text}
                isComplete={item.isComplete}
              />
            ))}
          </StyledListItemCollection>
        </>
      )}
    </StyledListView>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
  };
};

export default connect(mapStateToProps)(ListView);
