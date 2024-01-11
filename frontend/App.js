
import { StyleSheet, Text, View, Image} from 'react-native';


import { useEffect, useState } from 'react';

import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLog, setIsLog] = useState(true);

// UTILE POUR IMAGE PICKER
  // const pickImageAsync = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setSelectedImage(result.assets[0].uri);
  //     setShowAppOptions(true);

  //   } else {
  //     alert('You did not select any image.');
  //   }
  // };
  // <ImageViewer source={{ uri : 'https://img.freepik.com/photos-gratuite/peinture-lac-montagne-montagne-arriere-plan_188544-9126.jpg?w=2000'}} selectedImage={selectedImage} />
// UTILE POUR IMAGE PICKER
const Stack = createStackNavigator();

  useEffect(() => {
    onLog();
  }, []); 

  const onLog = () => {
    console.log('Executing onLog...');
    // Logique de connexion
    // Mettez à jour setIsLog en fonction de l'état de connexion
        // if (isLog) {
    //   setIsLog(true);
    //   return;
    // }

  };

  // const onAddSticker = () => {
  //   setIsModalVisible(true);
  // };

  // const onSaveImageAsync = async () => {};

  // const onModalClose = () => {
  //   setIsModalVisible(false);
  // };
  return (
    <NavigationContainer>
        <View style={styles.imageContainer}>
        <Stack.Navigator
  initialRouteName="Home" screenOptions= {{ headerShown: false, }}>            
              <Stack.Screen name="Home" component={Home} />
       
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />

          </Stack.Navigator>
        </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',  
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
  },
  optionsContainer: {
    backgroundColor: '#F6F4EE',
    // flex:1,

  },
});
