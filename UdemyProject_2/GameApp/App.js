import { StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
  <LinearGradient colors={["#ace6dfff","#eb2a97ff"]} style={styles.rootScreen} >
      <StartGameScreen/>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
