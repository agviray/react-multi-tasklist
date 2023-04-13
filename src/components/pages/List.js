import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListTitle from '../ListTitle';
import ListItemAdder from '../ListItemAdder';
import ListItemCollection from '../ListItemCollection';

const List = () => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (title === '' && items.length === 0) {
      const storedTitle = location.state.title;
      const storedItems = [...location.state.items];
      setTitle(storedTitle);
      setItems([...storedItems]);
    }
  }, []);

  useEffect(() => {
    if (newTask === '') {
      return;
    } else {
      setItems([...items, newTask]);
      setNewTask('');
    }
  }, [newTask]);

  const updateNewTask = (addedTask) => {
    setNewTask(addedTask);
  };

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <div>
      <ListTitle title={title} onTitleChange={updateTitle} />
      <ListItemAdder onNewTaskChange={updateNewTask} />
      <ListItemCollection newTask={newTask} items={items} />
    </div>
  );
};

export default List;
