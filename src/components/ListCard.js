import React from 'react';
import { StyledListCard } from './styles/ListCard.styled';

const ListCard = ({ list }) => {
  return (
    <StyledListCard>
      <div>
        <h2>{list.title}</h2>
        <ul>
          {list.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </StyledListCard>
  );
};

export default ListCard;
