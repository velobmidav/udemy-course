import { useState } from 'react';
import  GoalItem  from './components/GoalItem';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {

const [enteredGoalText, setEnteredGoalsText] = useState('');
const [courseGoals, setCourseGoals] = useState([])

function goalInputHandler(enteredText) {
  setEnteredGoalsText(enteredText);
};

function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals, 
    { text: enteredGoalText, id: Math.random().toString()}]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your first goal..' style={styles.TextInput} onChangeText={goalInputHandler}/>
        <Button title='ADD GOAL' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (<GoalItem text={itemData.item.text}/>)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer:{
    flex: 5,
  }
});
