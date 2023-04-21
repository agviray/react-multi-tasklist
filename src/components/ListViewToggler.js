import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeView } from '../actions';
import { StyledListViewToggler } from './styles/ListViewToggler.styled';

const initialFields = [
  {
    name: 'Active',
    isSelected: true,
  },
  {
    name: 'Complete',
    isSelected: false,
  },
  {
    name: 'All',
    isSelected: false,
  },
];
const ListViewToggler = ({ changeView }) => {
  const [fields, setFields] = useState(initialFields);

  useEffect(() => {
    const selectedField = fields.filter((field) => field.isSelected !== false);
    if (selectedField[0].name === 'Active') {
      changeView('active');
    } else if (selectedField[0].name === 'Complete') {
      changeView('complete');
    } else if (selectedField[0].name === 'All') {
      changeView('all');
    }
  }, [fields]);

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

export default connect(null, {
  changeView: changeView,
})(ListViewToggler);
