import { TextInput, View, StyleSheet } from "react-native"; 
import PrimaryButton from "../components/PrimaryButton"; 


function StartGameScreen(){
    return <View style={styles.inputContainer}>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
        <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 12,
        borderColor: "#eb2a97ff",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 30,
        padding: 16,
        backgroundColor: "#e5fefbff",
        elevation: 20,
        shadowColor: "#0F7A6C",
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#eb2a97ff",
        borderBottomWidth: 1,
        marginVertical: 8,
        fontWeight: "bold",
        color: "#eb2a97ff",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})