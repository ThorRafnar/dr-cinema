import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import {PRIMARY_LIGHT} from "../../constants";

const Spinner = () => (
  <View style={styles.spinner}>
    <ActivityIndicator size="large" color={PRIMARY_LIGHT}/>
  </View>
);

export default Spinner;
