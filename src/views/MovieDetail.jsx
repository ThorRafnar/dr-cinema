import React from 'react';
import {
  View, ImageBackground, Image, StyleSheet, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import * as Linking from 'expo-linking';
import {MARGINS, PRIMARY_DARK, PRIMARY_LIGHT, SCREEN_HEIGHT, SCREEN_WIDTH} from "../constants";
import Genres from '../components/Genres';
import styles from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";

const MovieDetail = function ({ route }) {
  const { movie, cinema } = route.params;
  const shows = movie.showtimes.find(x => {
    return x.cinema.id === cinema.id;
  }).schedule;
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <ImageBackground
        source={{uri: movie.poster}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={50}
      >
        <ScrollView>
          <Image
            key={'image'}
            source={{uri: movie.poster}}
            style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH * 1.5}}
          />
          <View
            key={'info'}
            style={{height: '100%', backgroundColor: 'black', opacity: 0.8, alignItems: 'center'}}
          >
            <Text style={{fontSize: 32, color: 'white', fontWeight: '300'}}>{movie.title}</Text>
            <Text style={{fontSize: 48, color: 'white', fontWeight: '100'}}>{movie.year}</Text>
            <Genres genres={movie.genres} />
            <Text style={{fontSize: 24, color: 'white', fontWeight: '300'}}>Runtime {movie.durationMinutes} minutes</Text>
            <Text style={{fontSize: 18, color: 'white', fontWeight: '300', margin: 20}}>{movie.plot}</Text>
            <Text style={{fontSize: 32, color: 'white', fontWeight: '300', margin: 20}}>Shows at {cinema.name}</Text>
            {
              shows.map(x => {
                return (
                  <TouchableOpacity
                    onPress={() => Linking.openURL(x.purchase_url)}
                  >
                    <LinearGradient
                      // Button Linear Gradient
                      colors={[PRIMARY_DARK, PRIMARY_LIGHT]}
                      start={{x: 0.0, y: 0.0}}
                      end={{x: 1, y: 1}}
                      style={styles.purchaseTicket}
                    >
                      <MaterialCommunityIcons name="ticket" size={40} color="white" />
                      <Text style={{fontSize: 32, color: 'white', fontWeight: '300', margin: 20}}>{x.time}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )
              })
            }
            <View style={{height: 100}}/>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MovieDetail;
