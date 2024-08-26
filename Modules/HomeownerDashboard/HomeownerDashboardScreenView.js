import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import iconTransferMoney from '../../assets/icon_transfer_money.png';
import iconSendMoney from '../../assets/icon_send_money.png';
import iconRecieveMoney from '../../assets/icon_recieve_money.png';
import iconAddMoney from '../../assets/icon_add_money.png'
import AuthManager from '../../Utils/AuthManager';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './HomeownerDashboardStyle';

export default function HomeownerDashboardScreen() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../../assets/fonts/EuclidCircularARegular.ttf'),
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