import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import { setItem, getItem } from '../../Utils/AsyncStorage';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import AuthManager from '../../Utils/AuthManager';
import * as Crypto from 'expo-crypto';
import styles from './SignUpStyle';

const SignUpScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'EuclidCircularA-SemiBold': require('../../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Regular': require('../../assets/fonts/EuclidCircularARegular.ttf'),
        'Inter-Regular': require('../../assets/fonts/InterRegular.ttf'),
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleReEnterPasswordVisibility = () => {
        setReEnterPasswordVisible(!reEnterPasswordVisible);
    };

    const validateAndStoreData = async () => {
        const lowerCaseEmail = email.toLowerCase();

        if (!name || !lowerCaseEmail || !password || !reEnterPassword) {
            Alert.alert('Error', 'Please fill out all fields');
            return;
        }

        if (password !== reEnterPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        const userId = Crypto.randomUUID();
        const userData = {
            userId,
            name,
            email: lowerCaseEmail,
            password,
            phoneNumber: '',
            renovationAddress: '',
            renovationHouseType: '',
            renovationKeyCollectionDate: '',
        };

        try {
            const existingUsers = (await getItem('user_data')) || [];

            const emailExists = existingUsers.some(user => user.email === lowerCaseEmail);
            if (emailExists) {
                Alert.alert('Error', 'Email is already registered');
                return;
            }

            await setItem('user_data', [...existingUsers, userData]);

            const signInSuccessful = await AuthManager.signIn(lowerCaseEmail, password);

            if (signInSuccessful) {
                const localPart = lowerCaseEmail.split('@')[0];
                if (localPart.includes('regular')) {
                    navigation.navigate('HomeownerTabs');
                } else if (localPart.includes('id')) {
                    navigation.navigate('DesignerTabs');
                } else {
                    navigation.navigate('HomeownerTabs');
                }
            } else {
                Alert.alert('Error', 'Incorrect email or password');
            }
        } catch (error) {
            Alert.alert('Error', 'There was an error saving your data');
        }
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
                onChangeText={(text) => setEmail(text.toLowerCase())}
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
                    placeholderTextColor="#42474E"
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

            <Button title="Submit" buttonStyle={styles.submitButton} titleStyle={styles.submitButtonText} onPress={validateAndStoreData} />
        </View>
    );
};

export default SignUpScreen;