import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import upcomingMovies from './upcomingMoviesReducer';

export default combineReducers({
  cinemas,
  upcomingMovies,
});
