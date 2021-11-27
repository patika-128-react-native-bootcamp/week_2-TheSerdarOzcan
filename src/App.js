import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './App.styles';
import ProductCart from './components/ProductCart';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductCart />
    </SafeAreaView>
  );
};

export default App;
