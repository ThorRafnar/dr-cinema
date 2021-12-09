import React from "react";
import {
  Text, View, TouchableOpacity, Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import {ITEM_HEIGHT, MARGINS, PRIMARY_DARK, PRIMARY_LIGHT} from "../../constants";
import {LinearGradient} from "expo-linear-gradient";
import logoArray from "../../resources/logos";
import {useDispatch} from "react-redux";
import toggleModal from "../../actions/ModalActions";
import {selectCinema} from "../../actions/CinemaActions";

const CinemaThumbnail = ({ cinema }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const logos = logoArray();
  let currentLogo;
  try {
    currentLogo = logos[cinema.id - 1];
  } catch (err) {}

  const openModal = () => {
    dispatch(selectCinema(cinema));
    dispatch(toggleModal(true));
  }

  return (
    <View>
      <LinearGradient
        // Button Linear Gradient
        colors={['#222222', '#111111']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1, y: 1}}
        style={styles.cinemaThumbnail}
      >
        <TouchableOpacity
          style={styles.thumbnailText}
          onPress={() => navigate('Movies', { cinema: cinema })}
        >
          {currentLogo !== undefined ? (
            <Image source={currentLogo} style={styles.logo} />
          ) : (
            <Text style={styles.title}>{cinema.name}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{top: MARGINS, right: MARGINS, position: 'absolute'}}
          onPress={() => openModal()}
        >
          <MaterialIcons name="info-outline" size={32} color={PRIMARY_LIGHT} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => Linking.openURL(`https://${cinema.website}`)}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={[PRIMARY_DARK, PRIMARY_LIGHT]}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1, y: 1}}
            style={styles.linkContainer}
          >
            <Text style={styles.link}>{cinema.website}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default CinemaThumbnail;
