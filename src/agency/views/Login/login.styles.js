import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  content: {
    flex: 1,
  },
  grid: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: width / 1.5,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  googleIcon: {
    width: 40,
    height: 40,
  },
});
