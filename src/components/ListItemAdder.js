import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { StyledListItemAdder } from './styles/ListItemAdder.styled';

const defaultText = 'Enter a task';

const ListItemAdder = ({ addItem }) => {
  const [doesInputHaveFocus, setDoesInputHaveFocus] = useState(false);
  const [text, setText] = useState(defaultText);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeypressEnter = (e) => {
    if (e.key === 'Enter') {
      addTask(e.target.value);
      e.target.blur();
    }
  };

  const handleFocus = (e) => {
    if (e.target.value === defaultText) {
      setText('');
    }
    setDoesInputHaveFocus(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setText(defaultText);
    }
    setDoesInputHaveFocus(false);
  };

  const addTask = (taskToAdd) => {
    if (taskToAdd === '' || taskToAdd === defaultText) {
      return;
    }
    addItem(taskToAdd);
    setText(defaultText);
  };

  return (
    <StyledListItemAdder
      hasDefaultText={text === defaultText}
      doesInputHaveFocus={doesInputHaveFocus}
    >
      <span>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleKeypressEnter(e)}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </span>
      <span onClick={() => addTask(text)}>
        <span>Add</span>
      </span>
    </StyledListItemAdder>
  );
};

export default connect(null, {
  addItem: addItem,
})(ListItemAdder);
