import React from 'react';
import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";
// Recycling a little bit
import styles from '../UpcomingMovieThumbnail/styles';
import { SCREEN_WIDTH } from "../../constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Genres from "../Genres";

const MovieThumbnail = ({ movie, index, scrollX, cinema }) => {
  const { navigate } = useNavigation();
  const width = SCREEN_WIDTH;
  // PARALLAX EFFECT MADE FOLLOWING A TUTORIAL BY CATALIN MIRON
  // https://www.youtube.com/watch?v=fSuYM86JXFo
  const inputRange = [
    (index - 1) * width,
    index * width,
    (index + 1) * width,
  ];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [ -width * 0.5, 0, width * 0.5]
  });
  const release = movie['year'];
  const posterUrl = movie.poster ? movie.poster : movie.omdb[0].poster;
  return (
    <View style={styles.movieThumbnail}>
      <TouchableWithoutFeedback
        onPress={() => navigate('MovieDetail', {movie, cinema})}
      >
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            <Animated.Image
              source={{ uri: posterUrl }}
              style={[styles.poster,
                {
                  transform: [{
                    translateX,
                  }]
                }]}
            />
          </View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseDate}>{release}</Text>
          <Genres genres={movie.genres} />

        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default MovieThumbnail;
