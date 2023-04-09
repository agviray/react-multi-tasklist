import React, { useState, useEffect } from 'react';
import AllLists from './AllLists';
import { StyledHome } from '../styles/Home.styled';
import Message from '../Message';

const Home = () => {
  const [allLists, setAllLists] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    const storedLists = JSON.parse(
      localStorage.getItem('storedMultiTasklistState')
    );

    if (storedLists) {
      // - Use an action creator here to update Redux store, so that the Redux store will contain all 'saved' lists from the 'database'--which in this app, is localStorage.
      setAllLists(storedLists);
    }
  }, []);

  useEffect(() => {
    if (allLists.length === 0) {
      setMessageText(`You do not have any saved lists. Click the "Add List" button to
      create a new list.`);
    } else {
      setMessageText(`Click the "Add List" button to create a new list, or select a list
      below to view/edit it.`);
    }
  }, [allLists]);

  return (
    <StyledHome>
      <div>
        <Message text={messageText} />
        <div>
          <span
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Add List +
          </span>
        </div>
      </div>
      <AllLists />
    </StyledHome>
  );
};

export default Home;
