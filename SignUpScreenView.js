import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import icon from './assets/icon.png';
import backgroundGif from './assets/background_signup.gif';

export default function SignUpScreen() {
    const { width, height } = Dimensions.get('window');

    // Load the custom font
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('./assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('./assets/fonts/EuclidCircularASemiBold.ttf'),
    });

    // Show a loading indicator until the font is loaded
    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Image
                source={backgroundGif}
                style={[styles.backgroundGif, { width, height }]}
                resizeMode="cover"
            />
            <View style={styles.overlay}>
                <View style={styles.spacer} />
                <Image
                    source={icon}
                    style={styles.logo}
                />
                <View style={styles.spacer} />
                <Text style={styles.title}>Are you entering as</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Homeowner</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Interior Design Firm</Text>
                </TouchableOpacity>
                <View style={styles.bottomSpacer} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundGif: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: Semi-transparent overlay to make content readable
        padding: 20,
        borderRadius: 10,
    },
    logo: {
        width: 130,
        height: 115,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    spacer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'EuclidCircularA-Bold', // Apply the custom font here
    },
    button: {
        backgroundColor: '#00696C',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 100,
        marginVertical: 10,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'EuclidCircularA-SemiBold',
    },
    bottomSpacer: {
        height: 160,
    },
});