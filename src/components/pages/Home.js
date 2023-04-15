import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadSavedLists } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import { StyledHome } from '../styles/Home.styled';
import AllLists from '../AllLists';
import Message from '../Message';

const initialAllLists = [
  {
    id: uuidv4(),
    title: 'Numbers',
    items: ['1', '56', '0', '99'],
  },
  {
    id: uuidv4(),
    title: 'Capital Letters',
    items: ['X', 'F', 'S', 'N', 'P', 'A'],
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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

const Home = ({ allLists, loadSavedLists }) => {
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    localStorage.setItem(
      'storedMultiTasklistState',
      JSON.stringify(initialAllLists)
    );
    const storedLists = JSON.parse(
      localStorage.getItem('storedMultiTasklistState')
    );

    if (storedLists) {
      loadSavedLists(storedLists);
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

    localStorage.setItem('storedMultiTasklistState', JSON.stringify(allLists));
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
      {allLists.length === 0 ? null : <AllLists />}
    </StyledHome>
  );
};

const mapStateToProps = (state) => {
  return {
    allLists: state.allLists,
  };
};

export default connect(mapStateToProps, {
  loadSavedLists: loadSavedLists,
})(Home);
