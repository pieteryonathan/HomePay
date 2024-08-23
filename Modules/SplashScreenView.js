import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import icon from '../assets/icon.png';

export default function SplashScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current; 

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
                <Image source={icon} style={styles.image} />
            </Animated.View>
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 240,
        height: 240,
        resizeMode: 'contain',
    },
});
