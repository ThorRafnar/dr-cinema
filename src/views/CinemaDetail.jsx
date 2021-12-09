import React, {useEffect, useState} from 'react';
import {
  Text, View,
} from 'react-native';
import CinemaDetailComponent from "../components/CinemaDetailModal";

const CinemaDetail = function ({ route }) {
  const { cinema } = route.params;
  return (
    <View>
      <CinemaDetailComponent cinema={cinema} />
    </View>
  );
};

export default CinemaDetail;
