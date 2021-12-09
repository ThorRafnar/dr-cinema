import { StyleSheet } from 'react-native';
import {MARGINS, POSTER_HEIGHT, POSTER_WIDTH, SCREEN_WIDTH} from "../../constants";

export default StyleSheet.create({
  poster: {
    width: POSTER_WIDTH * 1.15,
    height: POSTER_HEIGHT,
    resizeMode: 'cover',
  },
  posterContainer: {
    width: POSTER_WIDTH,
    height: POSTER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 14,
  },
  container: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    }
  },
  movieThumbnail: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    top: MARGINS,
  },
  title: {
    marginVertical: 10,
    fontWeight: '500',
    fontSize: 18,
  },
  releaseDate: {
    fontWeight: '200',
    fontSize: 32,
  },
  trailerButton: {
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    margin: MARGINS,
    padding: MARGINS / 2,
    borderRadius: MARGINS,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
  }
})
