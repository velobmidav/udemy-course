import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Title ({children}){
return (<Text style = {styles.title}>{children}</Text>
);
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.PRIMARY_TEXT_BLUE,
        textAlign: "center",
        borderWidth: 6,
        borderRadius: 20,
        backgroundColor: Colors.PRIMARY_BACKGROUND_BLUE,
        borderColor: "black",
        padding: 12,
    }
})