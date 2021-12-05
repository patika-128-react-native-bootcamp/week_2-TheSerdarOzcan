import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

export default function Button({handleAddProduct}) {
  return (
    <View>
      <TouchableOpacity onPress={handleAddProduct} style={styles.container}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
