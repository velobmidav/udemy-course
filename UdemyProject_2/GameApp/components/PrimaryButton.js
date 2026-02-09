import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: '#ace6dfff' }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: 'hidden',
  },
  innerContainer: {
    borderWidth:5,
    borderColor: 'black',
    backgroundColor: "#8af4e7ff",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 8,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
  },
});
