import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import iconTransferMoney from '../../assets/icon_transfer_money.png';
import AuthManager from '../../Utils/AuthManager';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './DesingerDashboardStyle';

export default function DesignerDashboardScreen() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../../assets/fonts/EuclidCircularARegular.ttf'),
        'EuclidCircularA-MediumItalic': require('../../assets/fonts/EuclidCircularAMediumItalic.ttf'),
    });

    const [userName, setUserName] = useState('');

    useFocusEffect(
        useCallback(() => {
            const fetchCurrentUser = async () => {
                const currentUser = await AuthManager.getCurrentUser();
                if (currentUser) {
                    setUserName(currentUser.name || 'Nicolette');
                }
            };

            fetchCurrentUser();
        }, [])
    );

    if (!fontsLoaded) {
        return null; // or some loading indicator
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.headerHomeowner}>
                        <Text style={styles.homeownerText}>Interior Designer</Text>
                        <View style={styles.spacer} />
                        <Icon name="notifications" size={32} color="#ffffff" />
                    </View>
                    <View style={styles.headerNameandTag}>
                        <Text style={styles.nameText}>{userName}</Text>
                        <Text style={styles.tagText}>#1234</Text>
                        <View style={styles.spacer} />
                    </View>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceText}>Whole Wallet</Text>
                        <Text style={styles.amountText}>$20,000</Text>
                        <Text style={styles.textSubtitle}>Singapore Dollar (SGD)</Text>
                    </View>
                </View>

                <View style={styles.containerWallet}>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={[styles.textSubtitle, { marginBottom: 8 }]}>Received</Text>
                            <Text style={styles.sectionTitle}>$50,000.00</Text>
                        </TouchableOpacity>

                        <View style={styles.verticalLine} />

                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={[styles.textSubtitle, { marginBottom: 8 }]}>In Escrow</Text>
                            <Text style={styles.sectionTitle}>$50,000.00</Text>
                        </TouchableOpacity>

                        <View style={styles.verticalLine} />

                        <TouchableOpacity style={styles.actionButton}>
                            <Image source={iconTransferMoney} style={styles.icon} />
                            <Text style={styles.actionText}>Transfer Money</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.project}>
                    <Text style={styles.sectionTitle}>Project Approval Alert</Text>
                    <Text style={styles.sectionEmptyProject}>No projects to approve at the moment</Text>
                    <View style={styles.spacerLine} />

                    <View style={styles.containerProjectSection}>
                        <Text style={styles.projectSectionTitle}>Create a new project</Text>
                        <Icon name="add" size={24} color="#5F5F5F" />
                    </View>

                    <View style={styles.containerProjectSection}>
                        <Text style={styles.projectSectionTitle}>View Reject Requests</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>

                    <TouchableOpacity
                        style={styles.containerProjectSection}
                        onPress={() => navigation.navigate('ProjectDetails')}
                    >
                        <Text style={styles.projectSectionTitle}>View All Projects</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </TouchableOpacity>

                    <View style={styles.spacerLine} />

                    <SubAccountsView />
                </View>
            </ScrollView>
        </View>
    );
}

const SubAccountsView = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.containerSubAccount}>
            <TouchableOpacity onPress={toggleExpand} style={styles.headerSubAccount}>
                <Text style={styles.headerTextSubAccount}>Sub-Accounts</Text>
                <View style={styles.spacer}/>
                <Icon name="add" size={24} color="#5F5F5F" />
                <Icon
                    name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={32}
                    color="#5F5F5F"
                />
            </TouchableOpacity>
            {isExpanded && (
                <View style={styles.subAccountsList}>
                    <SubAccountItem subId="Sub ID 1" />
                    <SubAccountItem subId="Sub ID 2" />
                    <SubAccountItem subId="Sub ID 1" />
                </View>
            )}
        </View>
    );
};

const SubAccountItem = ({ subId }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.subAccountItem}>
            <Text style={styles.subAccountText}>{subId}</Text>
            <Switch
                trackColor={{ false: "#BEC8C8", true: "#00696C" }}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};