import React from 'react';
import { StyledListCard } from './styles/ListCard.styled';
import DeleteIcon from './icons/DeleteIcon';

const ListCard = ({ list }) => {
  const renderCardContent = (listContent) => {
    const title = listContent.title === '' ? 'Add a title' : listContent.title;
    const items = listContent.items.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
    const message = 'Select this list to begin adding items.';

    return (
      <>
        <div>
          <h2>{title}</h2>
          <DeleteIcon listId={list.id} listTitle={list.title} />
        </div>
        <>
          {listContent.items.length === 0 ? (
            <div>
              <p>{message}</p>
            </div>
          ) : (
            <ul>{items}</ul>
          )}
        </>
      </>
    );
  };

  return (
    <StyledListCard isTitleBlank={list.title === '' ? true : false}>
      {renderCardContent(list)}
    </StyledListCard>
  );
};

export default ListCard;
