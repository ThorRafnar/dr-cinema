import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const CinemaDetailComponent = ({ cinema }) => {
  const description = cinema.description
    ? cinema.description
      .replaceAll('<br>', '')
      .replaceAll('<b>', '')
      .replaceAll('\n', '')
    : 'No description available';
  const phone = cinema.phone
    ? cinema.phone
    : 'No phone number available';
  return (
    <View>
      <Text>{cinema.name}</Text>
      <Text>{description}</Text>
      <Text>{cinema.address}</Text>
      <Text>{phone}</Text>
      <Text>{cinema.website}</Text>
    </View>
  )
}

export default CinemaDetailComponent;
