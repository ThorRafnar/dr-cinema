import {FlatList, Text, View} from "react-native";
import React from "react";
import CinemaThumbnail from '../CinemaThumbnail';

const CinemaList =  ({ cinemas }) => {
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 180 }}
      data={cinemas} keyExtractor={(x) => x.id.toString()}
      renderItem={({item}) => {
      return (
        <CinemaThumbnail cinema={item}/>
      )
    }}
    />
  )
}

export default CinemaList;
