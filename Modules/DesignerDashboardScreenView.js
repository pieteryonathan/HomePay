import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import iconTransferMoney from '../assets/icon_transfer_money.png';
import AuthManager from '../Utils/AuthManager';

export default function DesignerDashboardScreen() {
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
        'EuclidCircularA-MediumItalic': require('../assets/fonts/EuclidCircularAMediumItalic.ttf'),
    });

    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
            const currentUser = await AuthManager.getCurrentUser();
            if (currentUser) {
                setUserName(currentUser.name || 'Nicolette');
            }
        };

        fetchUserName();
    }, []);

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

                    <View style={styles.containerProjectSection}>
                        <Text style={styles.projectSectionTitle}>View All Projects</Text>
                        <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" />
                    </View>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        backgroundColor: '#00696C',
        padding: 24,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 72,
        paddingBottom: 64
    },
    headerHomeowner: {
        flexDirection: 'row',
    },
    homeownerText: {
        color: '#ffffff',
        fontFamily: 'EuclidCircularA-Medium',
        fontSize: 16,
    },
    headerNameandTag: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
        marginBottom: 24,
    },
    nameText: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'EuclidCircularA-Bold',
        marginRight: 7,
    },
    tagText: {
        color: '#DAE4E4',
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Medium',
    },
    balanceContainer: {
        minWidth: 255,
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        paddingHorizontal: 56,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 24,
        alignSelf: 'center',
    },
    balanceText: {
        color: '#002021',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'EuclidCircularA-Medium',
    },
    amountText: {
        color: '#002021',
        fontSize: 56,
        marginTop: 8,
        textAlign: 'center',
        fontFamily: 'EuclidCircularA-Bold',
    },
    textSubtitle: {
        color: '#002021',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'EuclidCircularA-Regular',
    },
    body: {
        padding: 0,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    actionButton: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    icon: {
        width: 32,
        height: 32,
    },
    actionText: {
        marginTop: 8,
        fontSize: 12,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Regular',
    },
    verticalLine: {
        width: 1,
        height: 40,
        backgroundColor: '#DAE4E4',
        marginHorizontal: 16,
    },
    containerWallet: {
        backgroundColor: '#fff',
        paddingTop: 16,
        marginTop: -48,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Bold',
        marginBottom: 16,
    },
    sectionEmptyProject: {
        fontSize: 16,
        color: '#002021',
        fontFamily: 'EuclidCircularA-MediumItalic',
        marginBottom: 16,
    },
    spacer: {
        flex: 1,
    },
    project: {
        marginBottom: 20,
        padding: 24,
    },
    spacerLine: {
        backgroundColor: '#BEC8C8',
        height: 1,
        marginBottom: 16,
    },
    projectSectionTitle: {
        fontSize: 18,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Bold',
    },
    containerProjectSection: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 16,
    },
    containerSubAccount: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
    },
    headerSubAccount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextSubAccount: {
        fontSize: 16,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Medium',
    },
    toggleIcon: {
        fontSize: 16,
    },
    subAccountsList: {
        marginTop: 10,
    },
    subAccountItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    subAccountText: {
        fontSize: 18,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Bold',
    },
});