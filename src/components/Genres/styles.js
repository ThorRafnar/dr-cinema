import { StyleSheet } from "react-native";
import {POSTER_WIDTH} from "../../constants";

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
    backgroundColor: '#333',
  },
  genreText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white'
  }
})
