import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import movies from './moviesReducer';

export default combineReducers({
    cinemas,
    movies,
});
