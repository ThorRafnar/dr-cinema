import React from 'react';
import {
    Text, View, TouchableOpacity,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";
import HeaderBackground from "../components/HeaderBackground";

const Main = function ({ navigation: { navigate } }) {
    return (
      <View>
        <HeaderBackground />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
      </View>
    );
};

export default Main;
