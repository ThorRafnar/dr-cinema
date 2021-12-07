import React, {useEffect} from 'react';
import {
    ImageBackground, Text, View,  FlatList, TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import getUpcomingMovies from "../actions/movieActions";


const Upcoming = function ({ navigation: { navigate } }) {
    const upcoming = useSelector(state => state.movies);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, []);

    console.log('Upcoming:', upcoming);
    return (
        <View>
            <Text>Hello, world!</Text>
        </View>
    );
};

export default Upcoming;
