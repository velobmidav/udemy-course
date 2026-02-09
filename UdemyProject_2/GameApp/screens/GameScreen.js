import {Text,View, StyleSheet} from "react-native"

function GameScreen () {
    return (
    <View style={styles.screen}>
        <View>
        <Text style = {styles.title}>Game Screen</Text>
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
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#0F7A6C",
        textAlign: "center",
        borderWidth: 6,
        borderRadius: 20,
        backgroundColor: "#8af4e7ff",
        borderColor: "black",
        padding: 12
    }
})