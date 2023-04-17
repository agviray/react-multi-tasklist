import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/index';
import {
  StyledModal,
  StyledMessageBox,
  StyledButtonContainer,
} from './styles/Modal.styled';

const Modal = ({ modal, hideModal }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (Object.keys(modal).length === 0) {
      setIsDisplayed(false);
    } else {
      setIsDisplayed(true);
    }
  }, [modal]);

  const proceedWithAction = () => {
    modal.button.callback();
    hideModal({});
    setIsDisplayed(false);
  };

  const closeModal = () => {
    hideModal({});
    setIsDisplayed(false);
  };

  return isDisplayed ? (
    <StyledModal>
      <div>
        <StyledMessageBox>
          <div>
            <h2>{modal.heading}</h2>
          </div>
          <div>
            <p>{modal.body}</p>
          </div>
          <div>
            <StyledButtonContainer>
              <span onClick={proceedWithAction}>{modal.button.text}</span>
              {modal.hasCancelOption ? (
                <span onClick={closeModal}>Cancel</span>
              ) : null}
            </StyledButtonContainer>
          </div>
        </StyledMessageBox>
      </div>
    </StyledModal>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps, {
  hideModal: hideModal,
})(Modal);
