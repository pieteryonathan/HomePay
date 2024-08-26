import { StyleSheet } from 'react-native';

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

export default styles;