import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadSavedLists,
  createList,
  deleteAllLists,
  displayModal,
} from '../../actions';
import { StyledHome } from '../styles/Home.styled';
import AllLists from '../AllLists';
import Message from '../Message';

const Home = ({
  allLists,
  loadSavedLists,
  createList,
  deleteAllLists,
  displayModal,
}) => {
  const [isDeleteAllDisabled, setIsDeleteAllDisabled] = useState(true);
  const [messageText, setMessageText] = useState('');

  // - Initial load of stored lists, if any exist.
  useEffect(() => {
    const storedLists = JSON.parse(
      localStorage.getItem('storedMultiTasklistState')
    );

    if (storedLists && allLists.length === 0) {
      loadSavedLists(storedLists);
    } else {
      loadSavedLists(allLists);
    }
  }, []);

  useEffect(() => {
    if (allLists.length === 0) {
      setMessageText(`You do not have any saved lists. Click the "Add List" button to
      create a new list.`);
      setIsDeleteAllDisabled(true);
    } else {
      setMessageText(`Click the "Add List" button to create a new list, or select a list
      below to view/edit it.`);
      setIsDeleteAllDisabled(false);
    }

    localStorage.setItem('storedMultiTasklistState', JSON.stringify(allLists));
  }, [allLists]);

  const createNewList = () => {
    createList();
  };

  const deleteLists = () => {
    deleteAllLists();
  };

  const displayDeleteWarning = () => {
    if (isDeleteAllDisabled === true) {
      return;
    } else {
      displayModal({
        modalHeading: 'Delete All Lists',
        modalBody:
          'Are you sure you want to delete all of your lists? This action cannot be undone.',
        modalButtons: [
          {
            type: 'caution',
            text: 'Delete All Lists',
            callback: () => deleteLists(),
          },
        ],
        modalHasCancelOption: true,
      });
    }
  };

  return (
    <>
      <StyledHome>
        <div>
          <Message text={messageText} />
          <div>
            <span onClick={createNewList}>Add List +</span>
            <span
              className={isDeleteAllDisabled ? 'disabled' : ''}
              onClick={displayDeleteWarning}
            >
              Delete All Lists
            </span>
          </div>
        </div>
        {allLists.length === 0 ? null : <AllLists />}
      </StyledHome>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allLists: state.allLists,
  };
};

export default connect(mapStateToProps, {
  loadSavedLists: loadSavedLists,
  createList: createList,
  deleteAllLists: deleteAllLists,
  displayModal: displayModal,
})(Home);
