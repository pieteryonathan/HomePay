import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00696C1C',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 64,
        paddingHorizontal: 8,
    },
    progressBar: {
        height: 4,
        borderRadius: 2,
        marginHorizontal: 4,
    },
    activeBar: {
        backgroundColor: '#00696C',
        width: (width - 48) / 3,
    },
    inactiveBar: {
        backgroundColor: '#cccccc',
        width: (width - 48) / 3,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    spacerTop: {
        flex: 1,
    },
    icon: {
        width: 240,
        height: 240,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    spacerBottomButton: {
        height: 115,
    },
    text: {
        fontSize: 24,
        color: '#00696C',
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: 'EuclidCircularA-Bold'
    },
    buttonLogin: {
        backgroundColor: '#00696C',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 100,
        marginVertical: 4,
        width: '90%',
        alignItems: 'center',
    },
    buttonLoginText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'EuclidCircularA-SemiBold'
    },
    buttonSignUp: {
        backgroundColor: 'transparent', // Set background color to clear
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 100,
        marginVertical: 4,
        width: '90%',
        alignItems: 'center',
        borderColor: '#6F7979',
        borderWidth: 1,
    },
    buttonSignUpText: {
        color: '#00696C',
        fontSize: 16,
        fontFamily: 'EuclidCircularA-SemiBold'
    },
    bottomSpacer: {
        height: 160,
    }
});

export default styles;