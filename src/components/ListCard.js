import React from 'react';
import { StyledListCard } from './styles/ListCard.styled';

const ListCard = ({ list }) => {
  const renderCardContent = (listContent) => {
    const title = listContent.title === '' ? 'New List' : listContent.title;
    const items = listContent.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    const message = 'There are no items in this list.';

    return (
      <>
        <h2>{title}</h2>
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

  return <StyledListCard>{renderCardContent(list)}</StyledListCard>;
};

export default ListCard;
