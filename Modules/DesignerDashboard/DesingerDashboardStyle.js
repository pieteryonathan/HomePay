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

export default styles