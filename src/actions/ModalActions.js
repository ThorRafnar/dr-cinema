import * as cinemaService from '../services/cinemaService';
import * as constants from '../constants';

export const toggleModal = (newVal) => ({
  type: constants.TOGGLE_MODAL,
  payload: newVal,
});

export default toggleModal;
