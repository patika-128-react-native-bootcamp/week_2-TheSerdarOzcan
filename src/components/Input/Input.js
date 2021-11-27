import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import styles from './Input.styles';

export default function Input({name, onValueChange}) {
  const handleText = value => {
    onValueChange(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
      <TextInput
        onChangeText={text => handleText(text)}
        style={styles.inputStyle}
      />
    </View>
  );
}
