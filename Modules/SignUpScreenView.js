import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

const SignUpScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');

    const [fontsLoaded] = useFonts({
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
        'Inter-Regular': require('../assets/fonts/InterRegular.ttf'),
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleReEnterPasswordVisibility = () => {
        setReEnterPasswordVisible(!reEnterPasswordVisible);
    };

    const handleSignUp = () => {
        // Handle sign-up logic here
        console.log('Sign Up', { name, email, password, reEnterPassword });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Set your password to keep your account safe!</Text>

            <TextInput
                style={styles.input}
                placeholder="Name as per NRIC*"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#42474E"
            />

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
                    placeholder="Create Password*"
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

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Re-enter Password*"
                    value={reEnterPassword}
                    onChangeText={setReEnterPassword}
                    secureTextEntry={!reEnterPasswordVisible}
                    placeholderTextColor="#42474E" // Setting placeholder color
                />
                <TouchableOpacity onPress={toggleReEnterPasswordVisibility} style={styles.eyeButton}>
                    <Icon
                        name={reEnterPasswordVisible ? 'visibility-off' : 'visibility'}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.spacer} />

            <TouchableOpacity style={styles.submitButton} onPress={handleSignUp}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 76,
        marginBottom: 64,
    },
    title: {
        fontFamily: 'Inter-Regular',
        fontSize: 32,
        marginBottom: 16,
    },
    subtitle: {
        fontFamily: 'EuclidCircularA-Regular',
        fontSize: 16,
        marginBottom: 48,
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
    submitButton: {
        backgroundColor: '#00696C',
        borderRadius: 100,
        paddingVertical: 15,
        marginHorizontal: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        fontFamily: 'EuclidCircularA-SemiBold',
        fontSize: 16,
        color: '#fff',
    },
    spacer: {
        flex: 1,
    }
});

export default SignUpScreen;