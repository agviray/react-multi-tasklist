import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { displayModal, saveUpdatedList } from '../actions';
import { Link, useNavigate } from 'react-router-dom';
import { StyledBackButton } from './styles/BackButton.styled';

const BackButton = ({ selectedList, displayModal, saveUpdatedList }) => {
  const [initialSelectedList, setInitialSelectedList] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedList.wasAltered === false) {
      setInitialSelectedList({ ...selectedList });
    }
  }, []);

  const exitList = () => {
    saveUpdatedList({ ...initialSelectedList });
    navigate('/');
  };

  const handleBackButtonClick = (e, list) => {
    if (list.wasAltered) {
      displayModal({
        modalHeading: 'Changes Found',
        modalBody:
          'You have made changes to this list. Exiting now will undo all of your current changes. How would you like to proceed?',
        modalButton: {
          text: 'Exit Without Saving',
          callback: () => exitList(),
        },
        modalHasCancelOption: true,
      });
      // - The following line prevents click event from bubbling to StyledBackButton's
      //   parent container (Link).
      e.preventDefault();
    }
    return;
  };

  return (
    <Link to="/">
      <StyledBackButton onClick={(e) => handleBackButtonClick(e, selectedList)}>
        Back
      </StyledBackButton>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
  };
};

export default connect(mapStateToProps, {
  displayModal: displayModal,
  saveUpdatedList: saveUpdatedList,
})(BackButton);
