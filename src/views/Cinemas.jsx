import React, {useEffect} from 'react';
import {
  ImageBackground, View
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import getAllCinemas from "../actions/CinemaActions";
import CinemaList from '../components/CinemaList';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../constants";
import CinemaDetailModal from "../components/CinemaDetailModal";

const Cinemas = function ({ navigation: { navigate } }) {
  const cinemas = useSelector(state => state.cinemas);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCinemas());
  }, []);

  return (
    <ImageBackground
      source={{uri: 'https://cdn.wallpapersafari.com/5/87/gpyuR9.jpg'}}
      style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
      blurRadius={10}
    >
      <View style={{width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.8}}>
        <CinemaList cinemas={cinemas} />
        <CinemaDetailModal />
      </View>
    </ImageBackground>
  );
};

export default Cinemas;
