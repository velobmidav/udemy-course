import { TextInput, View, Button, StyleSheet } from 'react-native';
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

return (<View style={styles.inputContainer}>
        <TextInput 
            placeholder='Your first goal..' 
            style={styles.TextInput} 
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>
        <Button 
            title='ADD GOAL' 
            onPress={addGoalHandler}/>
      </View>)
}

export default GoalInput;

const styles = StyleSheet.create({
  
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor:'#cccccc'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});