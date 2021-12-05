import React from 'react';
import {View, Text} from 'react-native';

import styles from './Products.styles';

export default function Products({name, price}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}
