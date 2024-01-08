import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import ImageViewer from './components/UTILE';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import CircleButtons from './components/CircleButtons';
import IconButton from './components/IconButton';
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import Home from './views/Home';
import Login from './views/Login';

//j

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

  useEffect(() => {
    onLog();
  }, []); 

  const onLog = () => {
        // if (isLog) {
    //   setIsLog(true);
    //   return;
    // }

  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {};

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>


    <ScrollView>

        <View style={styles.imageContainer}>
     
      {isLog ? (
        <View style={styles.optionsContainer}>
          <Home/>
      </View>
      ) : (
        <Login/>
       )}
     </View>
     </ScrollView>  
     </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',  
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  optionsContainer: {
    backgroundColor: '#F6F4EE',
    // flex:1,

  },
});
