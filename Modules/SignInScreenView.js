import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import AuthManager from '../Utils/AuthManager';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

const SignInScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Medium': require('../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
        'Inter-Regular': require('../assets/fonts/InterRegular.ttf'),
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validateAndSignIn = async () => {
        const lowerCaseEmail = email.toLowerCase();

        if (!lowerCaseEmail || !password) {
            setErrorMessage('Please enter both email and password');
            return;
        }

        try {
            const signInSuccessful = await AuthManager.signIn(lowerCaseEmail, password);

            if (signInSuccessful) {
                // Assuming the `current_user` data has a `role` property to determine navigation
                const currentUser = await AuthManager.getCurrentUser();
                if (currentUser) {
                    const localPart = lowerCaseEmail.split('@')[0];
                    if (localPart.includes('regular')) {
                        navigation.navigate('HomeownerTabs');
                    } else if (localPart.includes('id')) {
                        navigation.navigate('DesignerTabs');
                    } else {
                        navigation.navigate('HomeownerTabs');
                    }
                } else {
                    setErrorMessage('User data not found');
                }
                setErrorMessage('');
            } else {
                setErrorMessage('Incorrect email or password');
            }
        } catch (error) {
            setErrorMessage('There was an error signing in');
        }
    };

    const handleForgotPassword = () => {
        console.log('Forgot Password');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icon.png')}
                style={[styles.icon, { marginBottom: errorMessage ? 24 : 72 }]}
            />

            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}

            <TextInput
                style={styles.input}
                placeholder="Email*"
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
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

            <Button title="Sign In" buttonStyle={styles.verifyButton} titleStyle={styles.verifyButtonText} onPress={validateAndSignIn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginTop: 189,
        marginBottom: 64,
    },
    icon: {
        width: 200,
        height: 200,
        alignSelf: 'center',
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
    errorText: {
        color: '#BA1A1A',
        fontFamily: 'EuclidCircularA-Medium',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 28,
    },
    spacer: {
        flex: 1,
    },
    verifyButton: {
        backgroundColor: '#00696C',
        borderRadius: 100,
        paddingVertical: 15,
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