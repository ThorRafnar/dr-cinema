import React from 'react';
import { View, Text, TouchableOpacity, Animated } from "react-native";
import styles from './styles';
import {SCREEN_WIDTH} from "../../constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const UpcomingMovieThumbnail = ({ movie, index, scrollX }) => {
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
  const release = movie['release-dateIS'];
  const posterUrl = movie.poster ? movie.poster : movie.omdb[0].poster;
  let trailer = 'no trailer';
  let trailerId;
  // I know this is bad, but blame the guy who made the API, not me
  if (movie.trailers) {
    if (movie.trailers[0]) {
      if (movie.trailers[0].results) {
        if (movie.trailers[0].results[0]) {
          trailer = movie.trailers[0].results[0].url;
          trailer = trailer.split('/');
          trailerId = trailer[trailer.length - 1];
        }
      }
    }
  }
  console.log(trailer);
  return (
    <View style={styles.movieThumbnail}>
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
        {
          (trailer === 'no trailer')
            ? (
              <View style={[styles.trailerButton, {backgroundColor: '#777'}]}>
                <MaterialCommunityIcons name="youtube" size={48} color="white" />
                <Text style={styles.buttonText}>No trailer available</Text>
              </View>
            )
            : (
              <TouchableOpacity
                style={[styles.trailerButton, {backgroundColor: 'red'}]}
                onPress={() => navigate('Trailer', {trailer: trailerId})}
              >
                <MaterialCommunityIcons name="youtube" size={48} color="white" />
                <Text style={styles.buttonText}>Watch the trailer</Text>
              </TouchableOpacity>
            )
        }
      </View>
    </View>
  )
}

export default UpcomingMovieThumbnail;
