/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleEntrarPress = () => {
    navigation.navigate('OutraPagina');
  // eslint-disable-next-line semi
  }

  return (
    <View style={styles.container}>
      <Text>Página Inicial</Text>
      <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});
