import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function App() {

  const [imgUrl, setImgUrl] = useState("https://i.natgeofe.com/k/830b5d15-92db-429f-a80a-cc89b5700af5/mt-everest.jpg?w=1084.125&h=745.5")

  const openCamera = async() => {
    const result = await launchCamera()
    setImgUrl(result?.assets[0]?.uri)
    console.log(result)
  }
  const openLib = async () => {
    const result = await launchImageLibrary()
    setImgUrl(result?.assets[0]?.uri)
    console.log(result)
  }
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.img} source={{url : imgUrl}}/>
      <TouchableOpacity onPress={openCamera}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openLib}>
        <Text>Open gallery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
