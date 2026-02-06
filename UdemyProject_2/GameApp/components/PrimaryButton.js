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
    backgroundColor: "#ace6dfff",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 8,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: '#0F7A6C',
    textAlign: 'center',
    fontWeight: '600',
  },
});
