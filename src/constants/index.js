import {Dimensions} from "react-native";

export const GET_ALL_CINEMAS = 'GET_ALL_CINEMAS';
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const SELECT_CINEMA = 'SELECT_CINEMA';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const BASE_API_URL = 'https://api.kvikmyndir.is/';
export const ITEM_HEIGHT = 120;
export const MARGINS = 10;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const POSTER_WIDTH = SCREEN_WIDTH * 0.76;
export const POSTER_HEIGHT = POSTER_WIDTH * 1.5;
export const PRIMARY_LIGHT = '#256899';
export const PRIMARY_DARK = '#254599';
