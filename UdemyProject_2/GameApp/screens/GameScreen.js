import {Text,View, StyleSheet} from "react-native"
import {useState} from "react"
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude){
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if(rndNum === exclude){
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }

function GameScreen (props) {

    const initialGuess = generateRandomBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
    <View style={styles.screen}>
        <View>
        <Title>Game Screen</Title>
        <Text>{currentGuess}</Text>
        </View>
        <View>
            <Text>Higher or lower?</Text>
        </View>
        <View>
        </View> 
        </View>);
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})