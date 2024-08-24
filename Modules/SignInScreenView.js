import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

const SignInScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fontsLoaded] = useFonts({
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
        'Inter-Regular': require('../assets/fonts/InterRegular.ttf'),
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignIn = () => {
        // Handle sign-in logic here
        console.log('Sign In', { email, password });
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        console.log('Forgot Password');
    };

    return (
        <View style={styles.container}>
            
            <Image source={require('../assets/icon.png')} style={styles.icon} />

            <TextInput
                style={styles.input}
                placeholder="Email*"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor="#42474E"
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password*"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!passwordVisible}
                    placeholderTextColor="#42474E"
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
                    <Icon
                        name={passwordVisible ? 'visibility-off' : 'visibility'}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />

            <TouchableOpacity style={styles.verifyButton} onPress={handleSignIn}>
                <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 189,
        marginBottom: 64,
    },
    icon: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 72,
        resizeMode: 'contain',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingRight: 50,
        height: 56,
        marginBottom: 10,
        borderRadius: 5,
        fontFamily: 'EuclidCircularA-Regular',
        fontSize: 16,
        color: '#42474E',
    },
    passwordContainer: {
        position: 'relative',
        marginBottom: 10,
    },
    eyeButton: {
        position: 'absolute',
        right: 10,
        top: 8,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordText: {
        fontFamily: 'EuclidCircularA-SemiBold',
        fontSize: 16,
        color: '#00696C',
        textAlign: 'left',
    },
    spacer: {
        flex: 1,
    },
    verifyButton: {
        backgroundColor: '#00696C',
        borderRadius: 100,
        paddingVertical: 15,
        marginHorizontal: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    verifyButtonText: {
        fontFamily: 'EuclidCircularA-SemiBold',
        fontSize: 16,
        color: '#fff',
    },
});

export default SignInScreen;
