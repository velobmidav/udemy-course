import { useState } from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen.js';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import Colors from './constants/Colors.js';



export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler (pickedNumber) {
    setUserNumber(pickedNumber);
  }

  const screen = userNumber !== undefined ? <GameScreen userNumber={userNumber} /> : <StartGameScreen onPickedNumber={pickedNumberHandler}/>;


  return (
  <LinearGradient colors={[Colors.PRIMARY_BACKGROUND_BLUE, Colors.PRIMARY_PINK]} style={styles.rootScreen} >
    <ImageBackground source={require("./assets/background.png")} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <SafeAreaProvider><SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView></SafeAreaProvider>
    </ImageBackground>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.05
  }
});
