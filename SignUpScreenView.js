import { StyleSheet, Text, View } from "react-native";

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <Text> This is the sign up screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});