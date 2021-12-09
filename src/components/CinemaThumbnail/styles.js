import { StyleSheet, Dimensions } from 'react-native';
import { ITEM_HEIGHT, MARGINS } from '../../constants';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  cinemaThumbnail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: SCREEN_WIDTH - (MARGINS * 2),
    height: ITEM_HEIGHT - (MARGINS * 2),
    margin: MARGINS,
    borderRadius: 15,
    overflow: 'hidden',
  },
  logo: {
    resizeMode: 'contain',
    width: 220,
  },
  thumbnailText: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 24,
  },
  link: {
    position: 'absolute',
    fontSize: 16,
    marginLeft: MARGINS,
    marginBottom: 5,
    bottom: 0,
    textDecorationLine: 'underline',
    color: 'white',
    marginTop: 0,
    borderTopWidth: 1,
    borderBottomWidth: 2,
  },
  linkContainer: {
    position: 'absolute',
    bottom: 0,
    height: 30,
    width: '100%',
    backgroundColor: 'red',
  }
});
