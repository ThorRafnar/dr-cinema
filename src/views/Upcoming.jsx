import React, {useEffect} from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import getUpcomingMovies from "../actions/UpcomingMovieActions";
import UpcomingMovieList from "../components/UpcomingMovieList";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../constants";
import HeaderBackground from "../components/HeaderBackground";
import Spinner from "../components/Spinner";


const Upcoming = ({ navigation: { navigate } }) => {
  const upcoming = useSelector(state => state.upcomingMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);
  return (
    <ImageBackground
      source={{uri: 'https://cdn.wallpapersafari.com/5/87/gpyuR9.jpg'}}
      style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
      blurRadius={10}
    >
      {
        upcoming.length === 0
          ? <Spinner />
          : <UpcomingMovieList movies={upcoming}/>
      }
    </ImageBackground>
  );
};

export default Upcoming;
