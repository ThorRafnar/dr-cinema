import {Dimensions} from "react-native";

export const GET_ALL_CINEMAS = 'GET_ALL_CINEMAS';
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const GET_MOVIES_BY_CINEMA_ID = 'GET_MOVIES_BY_CINEMA_ID';
export const GET_BACKDROPS_BY_MOVIE_ID = 'GET_BACKDROPS_BY_MOVIE_ID';
export const RESET_BACKDROPS = 'RESET_BACKDROPS';
export const RESET_MOVIES = 'RESET_MOVIES';
export const SELECT_CINEMA = 'SELECT_CINEMA';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const BASE_API_URL = 'https://api.kvikmyndir.is/';
export const ITEM_HEIGHT = 80;
export const MARGINS = 10;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const POSTER_WIDTH = SCREEN_WIDTH * 0.76;
export const POSTER_HEIGHT = POSTER_WIDTH * 1.5;
