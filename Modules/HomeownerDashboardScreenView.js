import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import iconTransferMoney from '../assets/icon_transfer_money.png';
import iconSendMoney from '../assets/icon_send_money.png';
import iconRecieveMoney from '../assets/icon_recieve_money.png';
import iconAddMoney from '../assets/icon_add_money.png'
import AuthManager from '../Utils/AuthManager';
import { useNavigation } from '@react-navigation/native';

export default function HomeownerDashboardScreen() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
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

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.headerHomeowner}>
                        <Text style={styles.homeownerText}>Homeowner</Text>
                        <View style={styles.spacer} />
                        <Icon name="notifications" size={32} color="#ffffff" />
                    </View>
                    <View style={styles.headerNameandTag}>
                        <Text style={styles.nameText}>{userName}</Text>
                        <Text style={styles.tagText}>#1234</Text>
                        <View style={styles.spacer} />
                    </View>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceText}>Available Balance</Text>
                        <Text style={styles.amountText}>$20,000</Text>
                        <Text style={styles.currencyText}>Singapore Dollar (SGD)</Text>
                    </View>
                </View>

                <View style={styles.containerWallet}>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Image source={iconAddMoney} style={styles.icon} />
                            <Text style={styles.actionText}>Add Money</Text>
                        </TouchableOpacity>

                        <View style={styles.verticalLine} />

                        <TouchableOpacity style={styles.actionButton}>
                            <Image source={iconTransferMoney} style={styles.icon} />
                            <Text style={styles.actionText}>Transfer Money</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.transactions}>
                        <Text style={styles.sectionTitle}>Transactions</Text>
                        <View style={styles.transactionRow}>
                            <Image source={iconSendMoney} style={styles.iconTransaction} />
                            <View style={styles.transactionContainer}>
                                <Text style={styles.transactionText}>Transfer Money to Fadhil</Text>
                                <Text style={styles.transactionText}>09/25/23</Text>
                            </View>
                            <Text style={styles.transactionAmount}>-$200,000</Text>
                        </View>
                        <View style={styles.transactionRow}>
                            <Image source={iconRecieveMoney} style={styles.iconTransaction} />
                            <View style={styles.transactionContainer}>
                                <Text style={styles.transactionText}>Add Money from DBS</Text>
                                <Text style={styles.transactionText}>09/25/23</Text>
                            </View>
                            <Text style={styles.transactionAmount}>+$200,000</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.project}>
                    <View style={styles.headerProject}>
                        <Text style={styles.sectionTitle}>Projects</Text>
                        <View style={styles.spacer} />
                        <Icon name="arrow-forward" size={24} color="#002021" onPress={() => navigation.navigate('ProjectDetails')}/>
                    </View>

                    <View style={styles.projectRow}>
                        <View style={styles.headerProject}>
                            <Text style={styles.projectText}>Renovation for Stephen’s House</Text>
                            <View style={styles.spacer} />
                            <Icon name="arrow-forward-ios" size={24} color="#5F5F5F" onPress={() => navigation.navigate('ProjectDetails')} />
                        </View>

                        <View style={styles.containerMakePayment}>
                            <View style={styles.textContainerMakePayment}>
                                <Text style={styles.nextPaymentText}>Next Payment</Text>
                                <Text style={styles.trancheText}>Tranche 1: 20%</Text>
                            </View>
                            <View style={styles.spacer} />
                            <Button title="Make Payment" buttonStyle={styles.paymentButton} titleStyle={styles.paymentButtonText} />
                        </View>

                        <View style={styles.spacerLine} />

                        <View style={styles.escrowWallet}>
                            <Text style={styles.escrowText}>Escrow Wallet</Text>
                            <Icon name="info-outline" size={24} color="#002021" />
                            <View style={styles.spacer} />
                            <Text style={styles.escrowAmount}>$20,000</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

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
    currencyText: {
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
    iconTransaction: {
        width: 28,
        height: 28,
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
        padding: 16,
        marginTop: -48,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 32,
    },
    transactions: {
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 18,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Bold',
        marginBottom: 8,
    },
    transactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    transactionContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 8,
    },
    transactionText: {
        flex: 1,
        fontFamily: 'EuclidCircularA-Regular',
        fontSize: 12,
        color: '#002021',
        marginBottom: 8,
    },
    transactionAmount: {
        fontSize: 12,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Bold',
    },
    viewAllText: {
        color: '#00629D',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'EuclidCircularA-Medium',
        marginTop: 10,
    },
    headerProject: {
        flexDirection: 'row',
    },
    spacer: {
        flex: 1,
    },
    project: {
        marginBottom: 20,
        padding: 24,
    },
    projectRow: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 10,
    },
    containerMakePayment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    textContainerMakePayment: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    projectText: {
        color: '#002021',
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Bold',
        marginBottom: 24,
    },
    nextPaymentText: {
        color: '#002021',
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Medium',
        marginTop: 10,
    },
    trancheText: {
        color: '#002021',
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Medium',
        marginTop: 5,
    },
    paymentButton: {
        backgroundColor: '#00696C',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 100,
    },
    paymentButtonText: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'EuclidCircularA-SemiBold'
    },
    spacerLine: {
        backgroundColor: '#BEC8C8',
        height: 1,
    },
    escrowWallet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    escrowText: {
        fontSize: 18,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Regular',
        marginRight: 8,
    },
    escrowAmount: {
        fontSize: 24,
        fontFamily: 'EuclidCircularA-Bold',
        color: '#002021',
    },
});