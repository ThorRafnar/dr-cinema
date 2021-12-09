import * as cinemaService from '../services/cinemaService';
import * as constants from '../constants';

const getAllCinemasSuccess = (allCinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: allCinemas,
});

export const getAllCinemas = () => async (dispatch) => {
  try {
    const allCinemas = await cinemaService.getAllCinemas();
    dispatch(getAllCinemasSuccess(allCinemas));
  } catch (error) { }
};

export const selectCinema = (cinema) => ({
  type: constants.SELECT_CINEMA,
  payload: {...cinema}
});

export default getAllCinemas;
