import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import upcomingMovies from './upcomingMoviesReducer';
import movies from './moviesReducer';
import modal from './modalReducer';
import selectedCinema from "./selectedCinemaReducer";

export default combineReducers({
  cinemas,
  upcomingMovies,
  movies,
  modal,
  selectedCinema,
});
