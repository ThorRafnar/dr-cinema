import React, {useEffect} from 'react';
import {
    ImageBackground, Text, View,  FlatList, TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import getUpcomingMovies from "../actions/UpcomingMovieActions";
import UpcomingMovieList from "../components/UpcomingMovieList";


const Upcoming = function ({ navigation: { navigate } }) {
    const upcoming = useSelector(state => state.upcomingMovies);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, []);
    return (
        <UpcomingMovieList movies={upcoming}/>
    );
};

export default Upcoming;
