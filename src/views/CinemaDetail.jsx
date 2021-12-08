import React, {useEffect, useState} from 'react';
import {
  Text, View,
} from 'react-native';
import CinemaDetailComponent from "../components/CinemaDetailComponent";
import HeaderBackground from "../components/HeaderBackground";

const CinemaDetail = function ({ route }) {
  const { cinema } = route.params;
  return (
    <View>
      <HeaderBackground />
      <CinemaDetailComponent cinema={cinema} />
    </View>
  );
};

export default CinemaDetail;
