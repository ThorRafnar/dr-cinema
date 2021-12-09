import * as constants from '../constants';

export default (state = false, action) => {
  switch (action.type) {
    case constants.TOGGLE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

