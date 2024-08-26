import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';
import styles from './SplashScreenStyle';
import icon from '../../assets/icon.png';

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