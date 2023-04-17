import { types } from '../actions/types';

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case types.MODAL_DISPLAYED:
      const { modalHeading, modalBody, modalButton } = action.payload;
      return {
        heading: modalHeading,
        body: modalBody,
        button: { ...modalButton },
      };
    case types.MODAL_HIDDEN:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
