import React from 'react';
import {
  View
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Trailer = function ({ route }) {
  const { trailer } = route.params;
  console.log(trailer);
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={false}
        videoId={trailer}
      />
    </View>
  );
};

export default Trailer;
