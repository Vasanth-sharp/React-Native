import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Image source={require("./assets/images/laugh.png")} style={styles.img}/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:150
  },
  img:{
    width:100,
    height:100
  }
});
