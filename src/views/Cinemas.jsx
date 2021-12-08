import React, {useEffect, useState} from 'react';
import {
    Text, View,  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import getAllCinemas from "../actions/CinemaActions";
import CinemaList from '../components/CinemaList';
import HeaderBackground from "../components/HeaderBackground";

const Cinemas = function ({ navigation: { navigate } }) {
    const cinemas = useSelector(state => state.cinemas);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCinemas());
    }, []);

    console.log('Cinemas:', cinemas);
    return (
        <View>
            <HeaderBackground />
            <CinemaList cinemas={cinemas} />
        </View>
    );
};

export default Cinemas;
