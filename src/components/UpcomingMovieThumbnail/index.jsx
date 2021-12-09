import React from 'react';
import { View, Text, TouchableOpacity, Animated } from "react-native";
import styles from './styles';
import {SCREEN_WIDTH} from "../../constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

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
          trailer = 'yes';
          trailerId = movie.trailers[0].results[0].key;
        }
      }
    }
  }

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
              <LinearGradient
                colors={['#777', '#555']}
                start={{x: 0.0, y: 0.0}}
                end={{x: 1, y: 1}}
                style={styles.trailerButton}
              >
                <MaterialCommunityIcons name="youtube" size={48} color="white" />
                <Text style={styles.buttonText}>No trailer available</Text>
              </LinearGradient>
            )
            : (
              <LinearGradient
                // Button Linear Gradient
                colors={['#FF0000', '#CB0000']}
                start={{x: 0.0, y: 0.0}}
                end={{x: 1, y: 1}}
                style={styles.trailerButton}
              >
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                  onPress={() => navigate('Trailer', {trailer: trailerId, title: movie.title})}
                >
                  <MaterialCommunityIcons name="youtube" size={48} color="white" />
                  <Text style={styles.buttonText}>Watch the trailer</Text>
                </TouchableOpacity>
              </LinearGradient>
            )
        }
      </View>
    </View>
  )
}

export default UpcomingMovieThumbnail;
