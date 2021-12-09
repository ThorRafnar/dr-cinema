import * as constants from '../constants';
import * as movieService from '../services/movieService';

const getMoviesSuccess = (movies) => ({
  type: constants.GET_ALL_MOVIES,
  payload: movies,
});

export const getMovies = () => async (dispatch) => {
  try {
    const movies = await movieService.getMovies();
    dispatch(getMoviesSuccess(movies));
  } catch (error) { }
};

export default getMovies;
