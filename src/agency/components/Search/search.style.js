import {StyleSheet, Dimensions} from 'react-native';
import {SECONDARY} from '../../constants/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  form: {
    width,
    paddingLeft: width / 14,
    paddingRight: width / 14,
  },
  datesContainer: {
    marginTop: 12,
    justifyContent: 'space-between',
  },
  input: {
    marginTop: 12,
    marginBottom: 4,
  },
  pikersContainer: {
    marginTop: 14,
    marginBottom: 14,
  },
  searchButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchButton: {
    marginTop: 14,
    backgroundColor: SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 1.4,
  },
  serachButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginRight: -4,
  },
});
