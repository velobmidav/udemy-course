import { TextInput, View, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';



function GoalInput(props) {
const [enteredGoalText, setEnteredGoalsText] = useState('');

function goalInputHandler(enteredText) {
  setEnteredGoalsText(enteredText);
};

function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalsText('');
}

return (
<Modal visible={props.visible} animationType='slide'>
<View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/target.png")}/>
        <TextInput 
            placeholder='Your first goal..' 
            style={styles.TextInput} 
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>
        <View style={styles.ButtonContainer}>
        <View style={styles.Button}><Button color={"#3873dfff"} title='Cancel' onPress={props.onCancel}/></View>
        <View style={styles.Button}><Button color={"white"} title='Add' onPress={addGoalHandler}/></View>
        </View>
      </View>
</Modal>)
}

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    color: "white",
    width: 100,
    height: 100,
    margin: 20
  },
  inputContainer: {
    backgroundColor: '#8ab0f7ff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor:'#cccccc'
  },
  TextInput: {
    backgroundColor: "white" ,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '85%',
    margin: 8,
    padding: 8
  },
  ButtonContainer:{
    flexDirection: "row",
    marginVertical: "10"
  },
  Button: {
    width: "40%"
  }
});