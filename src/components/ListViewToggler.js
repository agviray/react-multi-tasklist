import React, { useState } from 'react';
import { StyledListViewToggler } from './styles/ListViewToggler.styled';

const initialFields = [
  {
    name: 'All',
    isSelected: true,
  },
  {
    name: 'Active',
    isSelected: false,
  },
  {
    name: 'Complete',
    isSelected: false,
  },
];
const ListViewToggler = () => {
  const [fields, setFields] = useState(initialFields);

  const updateFields = (selectedField) => {
    const updatedFields = fields.map((field) => {
      if (field.name === selectedField.name) {
        return { ...field, isSelected: true };
      }
      return { ...field, isSelected: false };
    });
    setFields(updatedFields);
  };

  return (
    <StyledListViewToggler>
      <div>
        <ul>
          {fields.map((field) => {
            return field.isSelected ? (
              <li
                onClick={() => updateFields(field)}
                key={field.name}
                className={'selected'}
              >
                <span>{field.name}</span>
              </li>
            ) : (
              <li onClick={() => updateFields(field)} key={field.name}>
                <span>{field.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledListViewToggler>
  );
};

export default ListViewToggler;
