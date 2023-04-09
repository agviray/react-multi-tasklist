import React, { useState, useEffect } from 'react';
import AllLists from './AllLists';
import { StyledHome } from '../styles/Home.styled';
import Message from '../Message';

const initialAllLists = [
  {
    title: 'Numbers',
    items: ['1', '56', '0', '99'],
  },
  {
    title: 'Capital Letters',
    items: ['X', 'F', 'S', 'N', 'P', 'A'],
  },
  {
    title: 'Mammals',
    items: [
      'Blue Whale',
      'Grizzly Bear',
      'Wooly Mammoth',
      'Wolverine',
      'Bengal Tiger',
      'Sea Otter',
    ],
  },
  {
    title: 'Sea Creatures',
    items: [
      'Octopus',
      'Giant Squid',
      'Starfish',
      'Great White Shark',
      'Blue Crab',
      'Tiger Shark',
      'Clownfish',
      'Baracuda',
      'Redfish',
    ],
  },
  {
    title: 'Colors',
    items: [
      'red',
      'orangge',
      'blue',
      'green',
      'maroon',
      'black',
      'purple',
      'yellow',
      'brown',
    ],
  },
  {
    title: 'list of lists',
    items: [
      'sea creatures list',
      'dinosaurs list',
      'natural elements list',
      'college subjects list',
      'Letter A Names List',
      'car models list',
      'Anime Shows List',
      'Horror Movies list',
      'Computer Parts List',
      'Suspense/Thriller Movies List',
    ],
  },
];

const Home = () => {
  // - allLists will eventually be a piece of state from the Redux store.
  const [allLists, setAllLists] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    // - storedLists are the lists that were stored in our 'database', aka localStorage.
    const storedLists = JSON.parse(
      localStorage.getItem('storedMultiTasklistState')
    );

    // - If any stored lists exist, then we will call the action creator, setAllLists, to store all the lists as a piece of state (allLists) in the Redux store.
    // - When allLists is stored as a piece of state in the Redux store, it will allow us to create, read, update, or delete a given list.
    if (storedLists) {
      // - setAllLists will eventually be an action creator.
      // - The action creator will update the Redux store, so that the Redux store will contain all 'saved' lists from the 'database'--which in this app, is localStorage.
      setAllLists(initialAllLists);
    }
  }, []);

  useEffect(() => {
    // - Any time a list is saved, our 'database'--aka localStorage--will be updated with the latest edits of all our lists.
    localStorage.setItem('storedMultiTasklistState', JSON.stringify(allLists));
  }, [allLists]);

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
      {allLists.length === 0 ? null : <AllLists lists={allLists} />}
    </StyledHome>
  );
};

export default Home;
