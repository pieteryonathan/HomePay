import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View>
               <Text>This is the home screen</Text>
            </View>
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