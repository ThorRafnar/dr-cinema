import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {LinearGradient} from "expo-linear-gradient";
import {PRIMARY_DARK} from "../../constants";

const Genre = ({ text }) => {
  return (
    <View style={styles.genre}>
      <Text style={styles.genreText}>{text}</Text>
    </View>
  )
}

const Genres = ({ genres }) => {
  return (
    <View style={styles.genreContainer}>
      {genres.map((genre) => (
        <Genre key={`genre-${genre.ID ? genre.ID : genre}`} text={genre['NameEN\t']} />
      ))}
    </View>

  )
}

export default Genres;
