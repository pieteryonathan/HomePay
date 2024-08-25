import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const EditInformationScreen = () => {
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
    });
    const navigation = useNavigation();

    // State to manage edit mode for each section
    const [personalInfoEdit, setPersonalInfoEdit] = useState(false);
    const [renovationInfoEdit, setRenovationInfoEdit] = useState(false);
    const [passwordEdit, setPasswordEdit] = useState(false);

    // State for each text input field
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [houseType, setHouseType] = useState('');
    const [keyCollectionDate, setKeyCollectionDate] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.containerNavBar}>
                <Icon name="arrow-back-ios" size={24} color="#002021" onPress={() => navigation.goBack()} />
                <Text style={styles.header}>Edit Information</Text>
                <View style={styles.spacer} />
            </View>

            <ScrollView style={styles.body}>
                <View style={styles.containerForm}>
                    <View style={styles.headerSection}>
                        <Text style={styles.labelTitle}>Personal Information</Text>
                        <Text
                            style={styles.labelEdit}
                            onPress={() => setPersonalInfoEdit(!personalInfoEdit)}
                        >
                            {personalInfoEdit ? 'Done' : 'Edit'}
                        </Text>
                    </View>

                    <View style={styles.containerTextInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Client Name as per NRIC"
                            value={clientName}
                            onChangeText={setClientName}
                            editable={personalInfoEdit}
                        />
                    </View>

                    <View style={styles.containerTextInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            editable={personalInfoEdit}
                        />
                    </View>

                    <View style={styles.containerTextInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            editable={personalInfoEdit}
                        />
                    </View>
                </View>

                <View style={styles.containerForm}>
                    <View style={styles.headerSection}>
                        <Text style={styles.labelTitle}>Renovation Information</Text>
                        <Text
                            style={styles.labelEdit}
                            onPress={() => setRenovationInfoEdit(!renovationInfoEdit)}
                        >
                            {renovationInfoEdit ? 'Done' : 'Edit'}
                        </Text>
                    </View>

                    <View style={styles.containerTextInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            value={address}
                            onChangeText={setAddress}
                            editable={renovationInfoEdit}
                        />
                    </View>

                    <View style={styles.containerTextInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="House Type"
                            value={houseType}
                            onChangeText={setHouseType}
                            editable={renovationInfoEdit}
                        />
                    </View>

                    <View style={styles.containerTextInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Key Collection Date"
                            value={keyCollectionDate}
                            onChangeText={setKeyCollectionDate}
                            editable={renovationInfoEdit}
                        />
                    </View>
                </View>

                <View style={styles.containerForm}>
                    <View style={styles.headerSection}>
                        <Text style={styles.labelTitle}>Password</Text>
                        <Text
                            style={styles.labelEdit}
                            onPress={() => setPasswordEdit(!passwordEdit)}
                        >
                            {passwordEdit ? 'Done' : 'Change Password'}
                        </Text>
                    </View>

                    <View style={styles.containerTextInput}>
                        <TextInput
                            style={styles.input}
                            placeholder='********'
                            placeholderTextColor="#BEC8C8"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={false}
                            editable={passwordEdit}
                        />
                    </View>
                </View>

                <Button title="Save" buttonStyle={styles.button} titleStyle={styles.buttonText} />
            </ScrollView>
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
    containerNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 32,
    },
    header: {
        fontSize: 24,
        fontFamily: 'EuclidCircularA-Regular',
        color: '#002021',
        textAlign: 'center',
    },
    body: {
        padding: 0,
    },
    containerForm: {
        marginBottom: 24,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    labelTitle: {
        fontSize: 18,
        fontFamily: 'EuclidCircularA-Bold',
        color: '#002021',
    },
    labelEdit: {
        fontSize: 16,
        fontFamily: 'EuclidCircularA-SemiBold',
        color: '#00696C',
    },
    containerTextInput: {
        marginTop: 16,
    },
    input: {
        height: 56,
        borderColor: '#1D1B201F',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 16,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    spacer: {
        width: 24,
    },
    button: {
        backgroundColor: '#00696C',
        paddingVertical: 16,
        borderRadius: 100,
        marginTop: 72,
        width: '100%',
    },
    buttonText: {
        fontFamily: 'EuclidCircularA-SemiBold',
        fontSize: 16,
        color: '#fff',
    },
});

export default EditInformationScreen;