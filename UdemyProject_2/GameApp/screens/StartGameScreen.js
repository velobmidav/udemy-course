import { TextInput, View, StyleSheet, Alert, Image } from "react-native"; 
import PrimaryButton from "../components/PrimaryButton"; 
import { useState } from "react";


function StartGameScreen({onPickedNumber}){
const [enteredNumber, setEnteredNumber] = useState('');

function resetInputHandler(){
    setEnteredNumber('');
}

function numberInputHandler (text) {
    setEnteredNumber(text);
    
}

function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
        Alert.alert("Invalid number", "Number must to be between 1 - 99.", [{chosenNumber: "okey", onPress: resetInputHandler}]);
        return;
    }

    onPickedNumber(chosenNumber);
}

    return (
        <View>
            <View >
            <Image style={styles.img} source={require("../assets/fortune-teller.png")}/>
            </View>
        <View style={styles.inputContainer}>
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
            <View >
            <Image style={styles.imgHands} source={require("../assets/open-hands.png")}/>
            </View>
            </View>
)
}

export default StartGameScreen;

const styles = StyleSheet.create({
    img: {
        marginTop: 85,
        marginHorizontal: 84,
        width: 230,
        height: 230,
    },
    imgHands: {
        marginHorizontal: 95,
        marginTop: 57,
        width: 230,
        height: 230,
    },
    inputContainer: {
        borderWidth: 7,
        borderColor: "BLACK",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
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
        borderBottomWidth: 3,
        marginVertical: 8,
        fontWeight: "bold",
        color: "blackšš",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})