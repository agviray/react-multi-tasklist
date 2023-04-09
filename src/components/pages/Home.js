import React, { useState, useEffect } from 'react';
import AllLists from './AllLists';
import { StyledHome } from '../styles/Home.styled';

const Home = () => {
  const [allLists, setAllLists] = useState([]);

  useEffect(() => {
    const storedLists = JSON.parse(
      localStorage.getItem('storedMultiTasklistState')
    );

    if (storedLists) {
      setAllLists(storedLists);
    }
  }, []);

  return (
    <StyledHome>
      {allLists.length === 0 ? (
        <>
          <p>
            You do not have any saved lists. Click the "Add List" button to
            create a new list.
          </p>
        </>
      ) : (
        <>
          <p>
            Click the "Add List" button to create a new list, or select a list
            below to view/edit it.
          </p>
        </>
      )}
      <span onClick={(e) => e.preventDefault()}>Add List +</span>
    </StyledHome>
  );
};

export default Home;
