import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import styles from './ChooseRoleStyle';
import icon from '../../assets/icon.png';
import backgroundGif from '../../assets/background_signup.gif';

const ChooseRoleScreen = () => {
    const navigation = useNavigation(); // Initialize useNavigation
    const { width, height } = Dimensions.get('window');

    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../../assets/fonts/EuclidCircularASemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Image source={backgroundGif} style={[styles.backgroundGif, { width, height }]} resizeMode="cover" />
            <View style={styles.overlay}>
                <View style={styles.spacer} />
                <Image source={icon} style={styles.logo} />
                <View style={styles.spacer} />
                <Text style={styles.title}>Are you entering as</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ChooseSignUp')}
                >
                    <Text style={styles.buttonText}>Homeowner</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ChooseSignUp')}
                >
                    <Text style={styles.buttonText}>Interior Design Firm</Text>
                </TouchableOpacity>
                <View style={styles.bottomSpacer} />
            </View>
        </View>
    );
};

export default ChooseRoleScreen;