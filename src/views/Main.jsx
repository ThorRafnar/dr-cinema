import React from 'react';
import {
    Text, View, TouchableOpacity,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";

const Main = function ({ navigation: { navigate } }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Hello, world!</Text>
            <TouchableOpacity
                onPress={() => navigate('Cinemas')}
                style={[{flexDirection:'row'}, styles.button]}
            >
                <MaterialIcons name="theaters" size={24} color="black" />
                <Text>Cinemas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('Upcoming')}
                style={[{flexDirection:'row'}, styles.button]}
            >
                <MaterialCommunityIcons name="movie-open" size={24} color="black" />
                <Text>Upcoming</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Main;
