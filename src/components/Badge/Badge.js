import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Badge.styles';

export default function Badge({id, name, selected, onSelectedChange}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onSelectedChange(id)}
        style={
          selected === id
            ? styles['selected'].container
            : styles['default'].container
        }>
        <Text style={styles['selected'].text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
