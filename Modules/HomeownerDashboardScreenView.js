import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function HomeownerDashboardScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.homeownerText}>Homeowner</Text>
                    <Text style={styles.nameText}>Nicolette #1234</Text>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceText}>Available Balance</Text>
                        <Text style={styles.amountText}>$20,000</Text>
                        <Text style={styles.currencyText}>Singapore Dollar (SGD)</Text>
                    </View>
                </View>

                <View style={styles.containerWallet}>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="add" size={24} color="#000" />
                            <Text style={styles.actionText}>Add Money</Text>
                        </TouchableOpacity>

                        <View style={styles.verticalLine} />

                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="send" size={24} color="#000" />
                            <Text style={styles.actionText}>Transfer Money</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.transactions}>
                        <Text style={styles.sectionTitle}>Transactions</Text>
                        <View style={styles.transactionRow}>
                            <Icon name="arrow-upward" size={24} color="red" />
                            <Text style={styles.transactionText}>Transfer Money to Fadhil</Text>
                            <Text style={styles.transactionAmount}>-$200,000</Text>
                        </View>
                        <View style={styles.transactionRow}>
                            <Icon name="arrow-downward" size={24} color="green" />
                            <Text style={styles.transactionText}>Add Money from DBS</Text>
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
                        <Icon name="arrow-forward" size={24} color="#002021" />
                    </View>
                    
                    <View style={styles.projectRow}>
                        <Text style={styles.projectText}>Renovation for Stephen’s House</Text>

                        <View style={styles.containerMakePayment}>
                            <View style={styles.textContainerMakePayment}>
                                <Text style={styles.nextPaymentText}>Next Payment</Text>
                                <Text style={styles.trancheText}>Tranche 1: 20%</Text>
                            </View>
                            <View style={styles.spacer} />
                            <Button title="Make Payment" buttonStyle={styles.paymentButton} />
                        </View>

                    </View>
                    <View style={styles.escrowWallet}>
                        <Text style={styles.escrowText}>Escrow Wallet</Text>
                        <Text style={styles.escrowAmount}>$20,000</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name="dashboard" size={24} color="#000" />
                    <Text style={styles.footerText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name="work" size={24} color="#000" />
                    <Text style={styles.footerText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name="settings" size={24} color="#000" />
                    <Text style={styles.footerText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        marginBottom: 16,
    },
    header: {
        backgroundColor: '#00696C',
        padding: 24,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 72,
        paddingBottom: 64
    },
    homeownerText: {
        color: '#ffffff',
        fontSize: 18,
    },
    nameText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 24,
    },
    balanceContainer: {
        width: 255,
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
    },
    amountText: {
        color: '#002021',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    currencyText: {
        color: '#002021',
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
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
    actionText: {
        marginTop: 8,
        fontSize: 14,
        color: '#000',
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
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    transactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    transactionText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    transactionAmount: {
        fontSize: 16,
        color: '#000',
    },
    viewAllText: {
        color: '#39685e',
        fontSize: 16,
        textAlign: 'center',
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
    },
    textContainerMakePayment: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    projectText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    nextPaymentText: {
        fontSize: 16,
        marginTop: 10,
    },
    trancheText: {
        fontSize: 16,
        marginTop: 5,
        color: '#666',
    },
    paymentButton: {
        backgroundColor: '#39685e',
        marginTop: 10,
    },
    escrowWallet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
    },
    escrowText: {
        fontSize: 16,
        color: '#666',
    },
    escrowAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    footerButton: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: '#000',
        marginTop: 5,
    },
});