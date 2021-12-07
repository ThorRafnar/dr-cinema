import React, {useEffect, useState} from 'react';
import {
    Text, View,  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import getAllCinemas from "../actions/cinemaActions";

const Cinemas = function ({ navigation: { navigate } }) {
    const cinemas = useSelector(state => state.cinemas);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCinemas());
    }, []);

    console.log('Cinemas:', cinemas);
    return (
        <View>
            <FlatList data={cinemas} keyExtractor={(x) => x.id.toString()} renderItem={ ({ item }) => {
                return (
                    <View style={{backgroundColor: '#CCC', margin: 10}}>
                        <Text>{item.name}</Text>
                        <Text>{item.website}</Text>
                    </View>
                )}
            }
            />
        </View>
    );
};

export default Cinemas;
