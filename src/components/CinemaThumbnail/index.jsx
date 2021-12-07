import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ITEM_HEIGHT, MARGINS } from "../../constants";

const CinemaThumbnail = ({ cinema }) => {
  const { navigate } = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate('CinemaDetail', { cinema: cinema })}
        style={styles.cinemaThumbnail}
      >
        <MaterialIcons name="theaters" size={ITEM_HEIGHT - MARGINS * 2} color="black" />
        <View style={styles.thumbnailText}>
          <Text>{cinema.name}</Text>
          <Text>{cinema.website}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CinemaThumbnail;
