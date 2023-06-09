import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { displayModal, saveUpdatedList } from '../actions';
import { useNavigate } from 'react-router-dom';
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

  const saveChanges = () => {
    saveUpdatedList({ ...selectedList });
    navigate('/');
  };

  const handleBackButtonClick = (list) => {
    if (list.wasAltered) {
      displayModal({
        modalHeading: 'Changes Found',
        modalBody:
          'You have made changes to this list. How would you like to proceed?',
        modalButtons: [
          {
            type: 'save',
            text: 'Save And Exit',
            callback: () => saveChanges(),
          },
          {
            type: 'caution',
            text: 'Exit Without Saving',
            callback: () => exitList(),
          },
        ],
        modalHasCancelOption: true,
      });
    } else {
      navigate('/');
    }
  };

  return (
    <StyledBackButton onClick={() => handleBackButtonClick(selectedList)}>
      Back
    </StyledBackButton>
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
