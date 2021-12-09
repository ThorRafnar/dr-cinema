import React, {useState} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import NativeModal from 'react-native-modal';
import * as Linking from 'expo-linking';
import toggleModal from "../../actions/ModalActions";
import {useDispatch, useSelector} from "react-redux";
import styles from './styles';
import logoArray from "../../resources/logos";
import {MaterialIcons} from "@expo/vector-icons";
import {PRIMARY_DARK, PRIMARY_LIGHT} from "../../constants";

const CinemaDetailModal = () => {
  const dispatch = useDispatch();
  const cinema = useSelector(state => state.selectedCinema);
  const modalVisible = useSelector(state => state.modal);

  const onClose = () => {
    dispatch(toggleModal(false));
  };

  const description = cinema.description
    ? cinema.description.split(' ').filter(x => !x.includes('<b')).join(' ')
    : 'No description available';

  const phone = cinema.phone
    ? cinema.phone
    : 'No phone number available';

  const logos = logoArray();
  let currentLogo;
  try {
    currentLogo = logos[cinema.id - 1];
  } catch (err) {}

  return (
    <NativeModal
      isVisible={modalVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      hasBackdrop={true}
      swipeDirection={["up", "down", "left", "right"]}
      style={styles.modal}
    >
      <View style={styles.container}>
        {currentLogo !== undefined ? (
          <Image source={currentLogo} style={styles.logo} />
        ) : (
          <Text style={styles.title}>{cinema.name}</Text>
        )}
        <Text style={styles.description}>{description}</Text>
        <View style={styles.information}>
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => Linking.openURL(`https://maps.google.com/?q=${cinema.address.split(' ').join('+')}+${cinema.city.split(' ').join('+')}`)}
          >
            <MaterialIcons name="location-on" size={32} color={PRIMARY_LIGHT} />
            <Text style={styles.infoText}>{cinema.address}, {cinema.city}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => Linking.openURL(`tel:${cinema.phone}`)}
          >
            <MaterialIcons name="phone" size={32} color={PRIMARY_LIGHT} />
            <Text style={styles.infoText}>{phone}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => Linking.openURL(`https://${cinema.website}`)}
          >
            <MaterialIcons name="link" size={32} color={PRIMARY_LIGHT} />
            <Text style={[styles.infoText, {textDecorationLine: 'underline'}]}>{cinema.website}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeModal>
  )
}

export default CinemaDetailModal;
