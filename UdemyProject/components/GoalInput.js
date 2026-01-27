import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';
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
        <TextInput 
            placeholder='Your first goal..' 
            style={styles.TextInput} 
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>
        <View style={styles.ButtonContainer}>
        <View style={styles.Button}><Button title='ADD GOAL' onPress={addGoalHandler}/></View>
        <View style={styles.Button}><Button title='CANCEL'/></View>
        </View>
      </View>
</Modal>)
}

export default GoalInput;

const styles = StyleSheet.create({
  
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor:'#cccccc'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
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