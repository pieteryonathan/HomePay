import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginTop: 189,
        marginBottom: 64,
    },
    icon: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingRight: 50,
        height: 56,
        marginBottom: 10,
        borderRadius: 5,
        fontFamily: 'EuclidCircularA-Regular',
        fontSize: 16,
        color: '#42474E',
    },
    passwordContainer: {
        position: 'relative',
        marginBottom: 10,
    },
    eyeButton: {
        position: 'absolute',
        right: 10,
        top: 8,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordText: {
        fontFamily: 'EuclidCircularA-SemiBold',
        fontSize: 16,
        color: '#00696C',
        textAlign: 'left',
    },
    errorText: {
        color: '#BA1A1A',
        fontFamily: 'EuclidCircularA-Medium',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 28,
    },
    spacer: {
        flex: 1,
    },
    verifyButton: {
        backgroundColor: '#00696C',
        borderRadius: 100,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    verifyButtonText: {
        fontFamily: 'EuclidCircularA-SemiBold',
        fontSize: 16,
        color: '#fff',
    },
});

export default styles;