import {Text,View, StyleSheet} from "react-native"
import Title from "./Title";

function GameScreen () {
    return (
    <View style={styles.screen}>
        <View>
        <Title>Game Screen</Title>
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