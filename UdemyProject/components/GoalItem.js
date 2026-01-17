import { Text, View, StyleSheet } from 'react-native';

function GoalItem({ text }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#3873dfff',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
