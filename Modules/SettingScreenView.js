import React, { version } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useFonts } from 'expo-font';

const SettingScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
    });

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
                    <View style={styles.containerSetting}>
                        <Text style={styles.settingTitle}>Edit Information</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>

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

                <Button title="Logout" buttonStyle={styles.logoutButton} titleStyle={styles.logoutButtonText} />

            </ScrollView>

            <Text style={styles.versionLabel}>Version 1.0</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 24,
        backgroundColor: '#F7FAF9',
    },
    header: {
        fontSize: 24,
        fontFamily: 'EuclidCircularA-Regular',
        marginBottom: 32,
        color: '#002021',
        textAlign: 'center',
    },
    body: {
        padding: 0,
    },
    sectionInformation: {
        marginBottom: 16,
    },
    headerInformation: {
        fontSize: 22,
        fontFamily: 'EuclidCircularA-Bold',
        marginBottom: 8,
        color: '#002021',
    },
    labelInformation: {
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Regular',
        marginBottom: 8,
        color: '#002021',
    },
    sectionAccountSetting: {
        marginBottom: 24,
    },
    headerSetting: {
        fontSize: 18,
        fontFamily: 'EuclidCircularA-Bold',
        marginBottom: 16,
        color: '#002021',
    },
    containerSetting: {
        flexDirection: 'row',
        backgroundColor: '#00696C14',
        padding: 16,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 8,
    },
    settingTitle: {
        fontSize: 18,
        fontFamily: 'EuclidCircularA-Bold',
        color: '#002021',
    },
    spacer: {
        flex: 1,
    },
    spacerLine: {
        backgroundColor: '#BEC8C8',
        height: 1,
        marginTop: 8,
    },
    logoutButton: {
        flex: 1,
        backgroundColor: '#00696C',
        paddingVertical: 16,
        borderRadius: 100,
        marginTop: 24,
        width: '100%',
    },
    logoutButtonText: {
        fontFamily: 'EuclidCircularA-SemiBold',
        fontSize: 16,
        color: '#fff',
    },
    versionLabel: {
        fontFamily: 'EuclidCircularA-Regular',
        fontSize: 14,
        color: '#002021',
        marginBottom: 47
    }
});

export default SettingScreen;