import * as constants from '../constants';
import * as movieService from '../services/movieService';

const getUpcomingMoviesSuccess = (upcomingMovies) => ({
  type: constants.GET_UPCOMING_MOVIES,
  payload: upcomingMovies,
});

export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const upcomingMovies = await movieService.getUpcomingMovies();
    console.log(upcomingMovies);
    dispatch(getUpcomingMoviesSuccess(upcomingMovies));
  } catch (error) { }
};

export default getUpcomingMovies;
