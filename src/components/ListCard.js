import React from 'react';
import { StyledListCard, StyledCompletedItem } from './styles/ListCard.styled';
import DeleteIcon from './icons/DeleteIcon';
import Checkmark from './icons/Checkmark';

const ListCard = ({ list }) => {
  const renderCardContent = (listContent) => {
    const message = 'Select this list to begin adding items.';
    const title = listContent.title === '' ? 'Add a title' : listContent.title;
    const items = listContent.items.map((item) => {
      return item.isComplete ? (
        <StyledCompletedItem key={item.id}>
          <span>
            <Checkmark iconColor={'#50bda1'} />
          </span>
          <div>{item.text}</div>
        </StyledCompletedItem>
      ) : (
        <li key={item.id}>{item.text}</li>
      );
    });

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
