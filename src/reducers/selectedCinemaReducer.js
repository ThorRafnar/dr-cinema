import * as constants from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case constants.SELECT_CINEMA:
      return action.payload;
    default:
      return state;
  }
};
