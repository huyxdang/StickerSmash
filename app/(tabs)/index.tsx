import { View, StyleSheet } from 'react-native';

import Button from '@/components/Button'; 
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined> ( // if user doesn't select anything, it's undefined
    undefined
  );

  const pickIamgeAsymc = async () => { // Function to open user's library and pick a picture from it
    let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  })

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri); 
    console.log(result);
  } else {
    alert("You did not select any image.")
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} /> {/* if there's no image selected, set to Place holder image */}
      </View>
      <View style={styles.footerContainer}>
        <Button 
        onPress ={pickIamgeAsymc} label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
