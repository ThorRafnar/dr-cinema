import * as cinemaService from '../services/cinemaService';
import * as constants from '../constants';

const getAllCinemasSuccess = (allCinemas) => {
    return {
        type: constants.GET_ALL_CINEMAS,
        payload: allCinemas,
    };
}

export const getAllCinemas = () => async (dispatch) => {
    try {
        const allCinemas = await cinemaService.getAllCinemas();
        dispatch(getAllCinemasSuccess(allCinemas));
    } catch (error) { }
};

export default getAllCinemas;
