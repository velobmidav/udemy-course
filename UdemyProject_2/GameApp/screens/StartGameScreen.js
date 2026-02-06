import { TextInput, View, StyleSheet, Alert } from "react-native"; 
import PrimaryButton from "../components/PrimaryButton"; 
import { useState } from "react";


function StartGameScreen(){
const [enteredNumber, setEnteredNumber] = useState('');

function resetInputHandler(){
    setEnteredNumber('');
}

function numberInputHandler (text) {
    setEnteredNumber(text);
    if(isNaN(text) || text <= 0 || text > 99){
        Alert.alert("Invalid number", "Number must to be between 1 - 99.", [{text: "okey", onPress: resetInputHandler}]);
        return;
    }
}

function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);
}

    return <View style={styles.inputContainer}>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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