function NumberContainer ({children}) {
return (
<View style={styles.container}>
    <Text>{children}</Text>
</View>
);
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {}
})