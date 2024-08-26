import { StyleSheet } from 'react-native';

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

export default styles