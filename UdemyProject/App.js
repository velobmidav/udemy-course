import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {

const [enteredGoalText, setEnteredGoalsText] = useState('');
const [courseGoals, setCourseGoals] = useState([])

function goalInputHandler(enteredText) {
  setEnteredGoalsText(enteredText);
};

function addGoalHandler() {
  setCourseGoals([...courseGoals, enteredGoalText]);
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
        renderItem={(itemData) => {
          return(<View>
            <Text style={styles.goalItem}>{itemData.item}</Text>
          </View>);
        }
        }/>
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
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#3873dfff',
    color: 'white'
  }
});
