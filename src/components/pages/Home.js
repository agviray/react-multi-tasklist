import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createList } from '../../actions';
import { StyledHome } from '../styles/Home.styled';
import AllLists from '../AllLists';
import Message from '../Message';
import Modal from '../Modal';

const Home = ({ allLists, createList }) => {
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    console.log('useEffect in Home page ran.');

    if (allLists.length === 0) {
      setMessageText(`You do not have any saved lists. Click the "Add List" button to
      create a new list.`);
    } else {
      setMessageText(`Click the "Add List" button to create a new list, or select a list
      below to view/edit it.`);
    }

    if (allLists.length !== 0) {
      localStorage.setItem(
        'storedMultiTasklistState',
        JSON.stringify(allLists)
      );
    }
  }, [allLists]);

  const createNewList = () => {
    createList();
  };

  return (
    <>
      <StyledHome>
        <div>
          <Message text={messageText} />
          <div>
            <span onClick={createNewList}>Add List +</span>
          </div>
        </div>
        {allLists.length === 0 ? null : <AllLists />}
      </StyledHome>
      <Modal />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allLists: state.allLists,
  };
};

export default connect(mapStateToProps, {
  createList: createList,
})(Home);
