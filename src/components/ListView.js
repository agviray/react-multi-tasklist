import React, { useState, useEffect } from 'react';
import {
  StyledListView,
  StyledListItemCollection,
} from './styles/ListView.styled';
import ListItem from './ListItem';

const ListView = ({ listInView }) => {
  const [listItems, setListItems] = useState([]);

  // *** Issue and temp fix - part 2 of 2 ***
  // - The fix contains 2 parts. The useEffect below is part 2 of 2. The first part is in List.js
  // - See List.js comment for issue details.
  useEffect(() => {
    if (Object.keys(listInView).length === 0) {
      return;
    } else {
      setListItems([...listInView.items]);
    }
  }, [listInView]);

  const currentViewItems = listItems.filter((item) => {
    switch (listInView.view) {
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
          <p>{renderNoItemsMessage(listInView.view)}</p>
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

export default ListView;
