import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import icon from './assets/icon.png'; // Ensure this path is correct

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00696C1C',
    },
    image: {
        width: 240,
        height: 240,
        resizeMode: 'contain',
    },
});
