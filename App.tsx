/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';


function App() {

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.top}><Image
            source={require('./src/img/logo.png')}
            style={styles.image}
          /></View>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.textLogin}>Bem vindo!!</Text>
          </View>
          <View style={styles.container5}>
            <TextInput style={styles.input} placeholder='RE:' placeholderTextColor='#090991' keyboardType='numeric'/>
            <TextInput style={styles.input} placeholder='SENHA:' placeholderTextColor='#090991' keyboardType='numeric'/>
          </View>
          <View style={styles.container6}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btn_txt}>Entrar</Text>
              
            </TouchableOpacity>
          </View>
          <Text style={styles.text_help}>Segurança em primeiro lugar!!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container2: {
    backgroundColor: '#090991',
    height: 500,
    width: 420,
    right: 4,
    borderRadius: 62,
  },
  container3: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 350,
    marginTop: 200,
    backgroundColor: '#ffffff',
    height: 450,
    left: 35,
    elevation: 10,
  },
  container4: {
    height: '25%',
    width: '100%',
    borderRadius: 20,
  },
  container5: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
  },
  container6: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#090991',
  },
  input: {
    height: 40,
    width: 270,
    paddingHorizontal: 10,
    marginTop: 10,
    fontWeight: 'bold',
    borderColor: 'transparent',
    backgroundColor: '#ffffff', // Background color to make it white
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 15, // For Android elevation
    borderRadius: 12,
  },
  buttonContainer: {
    marginTop: 50,
    width: 150,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#090991',
    padding: 10,
    borderRadius: 8,
    width: 150,
  },
  btn_txt: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text_help: {
    color: '#090991',
    fontWeight: 'bold',
  },
  image: {
    width: 250, // Adjust the width as needed
    height: 150,
    left:80,
    marginTop: 50, // Adjust the height as needed
    // resizeMode: 'cover',
  },
  img: {
    marginTop: 180,
    height: 40,
    backgroundColor: '#f31a1a',
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  top:{
    backgroundColor: '#090991',
    height:50,
  },
});

export default App;
