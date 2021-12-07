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
    borderRadius: 5,
    backgroundColor: '#CCC',
  },
  thumbnailText: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  link: {

  },
  title: {

  },
});
