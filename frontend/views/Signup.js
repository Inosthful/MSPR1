import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Pressable } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    const userData = {
      emailUser: email,
      motdepasseUser: password,
      // autres champs si nécessaire
    };

    // Remplacez l'URL par l'URL réelle de votre backend
    axios.post('https://votre-backend.com/signup', userData)
      .then(response => {
        // Gérer la réponse du backend ici
        console.log('Réponse du backend:', response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la requête au backend:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.loginCenter}>
        <View style={styles.textContainer}>
          <Text style={styles.textLogin}>Inscription</Text>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder='Adresse e-mail'
              placeholderTextColor="#7f8c8d"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Mot de passe'
              placeholderTextColor="#7f8c8d"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Confirmer mot de passe'
              placeholderTextColor="#7f8c8d"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleSignUp}>
              S'inscrire
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
    },
 
    textLogin:{
        fontSize: 40,
        paddingBottom: 30,
        color: 'white',
        fontWeight: 'bold',
    
    },
    inputs:{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    input:{
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: 'white',
    },
    buttonContainer:{
        paddingTop: 40,
    },
    button:{
        backgroundColor: 'rgb(21, 128, 61)',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 100,
        alignItems: 'center',
        color: 'white',
        fontWeight: 'semibold',

    },
    loginCenter: {

        flex: 1,
        alignItems: 'center',       // Centrer horizontalement
        justifyContent: 'center',  
        marginBottom: 50,   // Centrer verticalement
    },
    textContainer: {
        alignItems: 'center',   
        backgroundColor: '#2C2C2C',   
        padding: 40,
        borderRadius: 50,
        paddingHorizontal: 100,
    },
});