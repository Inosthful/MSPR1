import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ selectedImage }) {
    const imageSource = selectedImage  ? { uri: selectedImage } : {uri : 'https://img.freepik.com/photos-gratuite/peinture-lac-montagne-montagne-arriere-plan_188544-9126.jpg?w=2000'};

  return (
    <Image source={ imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});