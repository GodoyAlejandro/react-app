import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'; 

export default function App() {
  const [count, setCount]= useState(0)
  const onPress = ()=>{
    // Alert.alert('Hola chinchulin')
    setCount(i=>i+1)
  }
  return (
    <View style={styles.container}>
      <Text>hi como va todo, el count está en: {count} </Text>
      <Image source={{uri: 'https://picsum.photos/200/200'}} style={styles.image} />
      <TouchableOpacity onPress={onPress} >
        <Text>
          press me 
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{height: 200, width:200}
});
