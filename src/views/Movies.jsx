import React, {useEffect} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import MovieList from "../components/MovieList";
import getMovies from "../actions/MovieActions";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../constants";
import CinemaDetailModal from "../components/CinemaDetailModal";

const filterMovies = (cinemaId, movies) => {
  return movies.filter(m => {
    return m.showtimes.some(
      (s) => s.cinema.id === cinemaId || Number(s.cinema) === cinemaId,
    );
  });
};

const Movies = function ({ route }) {
  const { cinema } = route.params;
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const moviesToDisplay = filterMovies(cinema.id, movies);

  return (
  <ImageBackground
    source={{uri: 'https://www.teahub.io/photos/full/40-403913_2048x1536-movie-theatre-wallpaper-movie-theatre-wallpapers-movie.jpg'}}
    style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
    blurRadius={10}
  >
    <CinemaDetailModal />
    {
      moviesToDisplay.length === 0
        ? <Text style={{fontSize: 48, color: 'white', alignSelf: 'center'}}>No movies to display</Text>
        : <MovieList movies={moviesToDisplay} cinema={cinema}/>
    }
  </ImageBackground>
  );
};

export default Movies;
