import React, { useState, useEffect } from 'react';
import { StyledListItemAdder } from './styles/ListItemAdder.styled';

const ListItemAdder = () => {
  const defaultText = 'Enter a task';
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
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setText(defaultText);
    }
  };

  const addTask = (taskToAdd) => {
    if (taskToAdd === '' || taskToAdd === defaultText) {
      return;
    }
    // - Added task will be displayed in list.
    console.log(taskToAdd);
    setText(defaultText);
  };

  return (
    <StyledListItemAdder hasDefaultText={text === defaultText}>
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeypressEnter(e)}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
      />
      <span onClick={() => addTask(text)}>
        <span>Add</span>
      </span>
    </StyledListItemAdder>
  );
};

export default ListItemAdder;
