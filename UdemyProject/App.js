import { useState } from 'react';
import  GoalItem  from './components/GoalItem';
import  GoalInput  from './components/GoalInput';
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default function App() {
const [modalIsVisible, setModalIsVisible] = useState(false)
const [courseGoals, setCourseGoals] = useState([])

function startAddGoalHandler() {
  setModalIsVisible(true);
}
function addGoalHandler(enteredGoalText) {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals, 
    { text: enteredGoalText, id: Math.random().toString()}]);
  }

function deleteGoalHandler (id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => {goal.id !== id})
    })
}

  return (
    <View style={styles.appContainer}>
      <Button 
      title='Add new prop' 
      color={"#3873dfff"}
      onPress={startAddGoalHandler}
      />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (<GoalItem 
          text={itemData.item.text} 
          onDeleteItem={deleteGoalHandler}
          id={itemData.item.id}
          />)}
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
  goalsContainer:{
    flex: 5,
  }
});
