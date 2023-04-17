import { types } from '../actions/types';

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case types.MODAL_DISPLAYED:
      const { modalHeading, modalBody, modalButton, modalHasCancelOption } =
        action.payload;
      return {
        heading: modalHeading,
        body: modalBody,
        button: { ...modalButton },
        hasCancelOption: modalHasCancelOption,
      };
    case types.MODAL_HIDDEN:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
