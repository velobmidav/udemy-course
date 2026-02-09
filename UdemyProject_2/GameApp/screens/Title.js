import { Text, StyleSheet } from "react-native";

function Title ({children}){
return (<Text style = {styles.title}>{children}</Text>
);
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#0F7A6C",
        textAlign: "center",
        borderWidth: 6,
        borderRadius: 20,
        backgroundColor: "#8af4e7ff",
        borderColor: "black",
        padding: 12
    }
})