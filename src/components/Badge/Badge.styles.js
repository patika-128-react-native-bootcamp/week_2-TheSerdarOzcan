import {StyleSheet} from 'react-native';

const styles = {
  default: StyleSheet.create({
    container: {
      backgroundColor: '#cfcecc',
      borderColor: '#4a4a49',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
      padding: 5,
      alignItems: 'center',
      width: 111,
    },
    text: {
      color: '#4a4a49',
    },
  }),
  selected: StyleSheet.create({
    container: {
      backgroundColor: '#4a4a49',
      borderColor: '#4a4a49',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
      padding: 5,
      alignItems: 'center',
      width: 111,
    },
    text: {
      color: 'white',
    },
  }),
};

export default styles;
