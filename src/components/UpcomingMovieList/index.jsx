import React, {useRef} from 'react';
import { View, FlatList, Animated } from "react-native";
import UpcomingMovieThumbnail from "../UpcomingMovieThumbnail";

const UpcomingMovieList = ({ movies }) => {
  // PARALLAX EFFECT MADE FOLLOWING A TUTORIAL BY CATALIN MIRON
  // https://www.youtube.com/watch?v=fSuYM86JXFo
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <Animated.FlatList
      data={movies}
      keyExtractor={(x) => x.id.toString()}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: {  x: scrollX } } }],
          { useNativeDriver: true }
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      renderItem={ ({ item, index }) => {
        return (
          <UpcomingMovieThumbnail movie={item} index={index} scrollX={scrollX} />
        )}
      }
    />
  )
};

export default UpcomingMovieList;
