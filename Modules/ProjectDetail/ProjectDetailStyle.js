import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 24,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F3F4F6', // Background color similar to the image
    },
    header: {
        fontSize: 24,
        fontFamily: 'EuclidCircularA-Bold',
        marginBottom: 16,
        color: '#002021',
    },
    body: {
        padding: 0,
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Medium',
        marginBottom: 8,
        color: '#002021',
    },
    sectionHeaderTranches: {
        fontSize: 18,
        fontFamily: 'EuclidCircularA-Bold',
        marginBottom: 8,
        color: '#002021',
    },
    infoContainer: {
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        paddingBottom: 4,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    infoLabel: {
        fontSize: 16,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Bold'
    },
    paymentContainer: {
        marginTop: 8,
        marginBottom: 16,
    },
    infoLabelPercent: {
        fontSize: 18,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Regular',
    },
    infoLabelAmount: {
        fontSize: 18,
        color: '#002021',
        fontFamily: 'EuclidCircularA-Bold',
    },
    spacerLine: {
        backgroundColor: '#BEC8C8',
        height: 1,
        marginBottom: 16,
    },
    infoText: {
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Regular',
        color: '#002021',
    },
    infoTextTranche: {
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Bold',
        color: '#00629D',
    },
    containerAttachment: {
        marginBottom: 20,
    },
    imageAttachment: {
        width: '100%',
        height: 192,
        borderRadius: 10,
        marginTop: 16,
    },
    infoRowPayment: {
        flexDirection: 'row',
    },
    infoRowButtonPayment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },
    paymentButton: {
        flex: 1,
        backgroundColor: '#00696C',
        paddingVertical: 16,
        borderRadius: 100,
        width: '90%'
    },
    viewButton: {
        flex: 1,
        backgroundColor: '#EEF5FF',
        paddingVertical: 16,
        borderRadius: 100,
        width: '90%'
    },
    paymentButtonText: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'EuclidCircularA-SemiBold',
    },
    viewButtonText: {
        fontSize: 16,
        color: '#001D34',
        fontFamily: 'EuclidCircularA-SemiBold',
    },
    overlayContainer: {
        position: 'relative', // Ensure the container allows absolute positioning
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FCFCFF', // Overlay color
        opacity: 0.8, // Adjust opacity if needed
        zIndex: 1, // Ensure the overlay is above other content
    },
});

export default styles