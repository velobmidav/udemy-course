import { Text, View, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable 
    style={({pressed}) => pressed && styles.pressedStyle}
    onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#3873dfff',
  },
  pressedStyle: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
