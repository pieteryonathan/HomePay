import React, { version } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AuthManager from '../../Utils/AuthManager';
import styles from './SettingStyle';

const SettingScreen = () => {
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../../assets/fonts/EuclidCircularARegular.ttf'),
    });
    const navigation = useNavigation();

    const signOut = async () => {
        try {
            const signOutSuccessful = await AuthManager.signOut();

            if (signOutSuccessful) {
                navigation.navigate('SignIn');
            } else {
                console.log('Error Signing Out');
            }
        } catch (error) {
            console.log('Error Signing Out');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Setting</Text>

            <ScrollView style={styles.body}>
                <View style={styles.sectionInformation}>
                    <Text style={styles.headerInformation}>Client Name</Text>
                    <Text style={styles.labelInformation}>Client ID: XXXXXXXX</Text>
                    <Text style={styles.labelInformation}>Phone: 91234567</Text>
                    <Text style={styles.labelInformation}>Email: xxxx@gmail.com</Text>
                    <View style={styles.spacerLine} />
                </View>

                <View style={styles.sectionAccountSetting}>
                    <Text style={styles.headerSetting}>Account Settings</Text>
                    <TouchableOpacity
                        style={styles.containerSetting}
                        onPress={() => navigation.navigate('EditInformation')}
                    >
                        <Text style={styles.settingTitle}>Edit Information</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" onPress={() => navigation.navigate('EditInformation')}/>
                    </TouchableOpacity>

                    <View style={styles.containerSetting}>
                        <Text style={styles.settingTitle}>Notification Settings</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>
                    <View style={styles.containerSetting}>
                        <Text style={styles.settingTitle}>Transaction History</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>
                </View>

                <View style={styles.sectionAccountSetting}>
                    <Text style={styles.headerSetting}>Help</Text>
                    <View style={styles.containerSetting}>
                        <Text style={styles.settingTitle}>FAQ</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>

                    <View style={styles.containerSetting}>
                        <Text style={styles.settingTitle}>Contact Support</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>
                    <View style={styles.containerSetting}>
                        <Text style={styles.settingTitle}>Rate this App</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>
                </View>

                <Button title="Logout" buttonStyle={styles.logoutButton} titleStyle={styles.logoutButtonText} onPress={signOut} />

            </ScrollView>

            <Text style={styles.versionLabel}>Version 1.0</Text>

        </View>
    );
};

export default SettingScreen;