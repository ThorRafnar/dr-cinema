import { StyleSheet } from "react-native";
import {POSTER_WIDTH, PRIMARY_DARK} from "../../constants";

export default StyleSheet.create({
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: POSTER_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    margin: 4,
    padding: 6,
    borderRadius: 100,
    backgroundColor: PRIMARY_DARK,
  },
  genreText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  }
})
