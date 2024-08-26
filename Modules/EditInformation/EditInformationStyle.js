import { StyleSheet } from 'react-native';

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

export default styles