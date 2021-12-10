import {StyleSheet} from 'react-native';
import {MARGINS, PRIMARY_DARK, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';

export default StyleSheet.create({
  modal: {
  },
  container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH - (MARGINS * 4),
    justifyContent: 'center',
    padding: MARGINS * 2,
    borderRadius: MARGINS * 2,
  },
  logo: {
    resizeMode: 'contain',
    width: 220,
    maxHeight: 80,
  },
  description: {
    fontSize: 16,
    fontWeight: '200',
    fontStyle: 'italic',
  },
  information: {
    marginTop: 30,
    width: '100%',
    left: MARGINS,
    bottom: MARGINS,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
  },
  infoText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
    color: PRIMARY_DARK,
  }
});
