import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';

const ProjectDetailsScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
        'EuclidCircularA-Medium': require('../assets/fonts/EuclidCircularAMedium.ttf'),
        'EuclidCircularA-Regular': require('../assets/fonts/EuclidCircularARegular.ttf'),
    });
    return (        
        <View style={styles.container}>

            <View style={styles.containerNavBar}>
                <Icon name="arrow-back-ios" size={24} color="#002021" onPress={() => navigation.goBack()} />
                <Icon name="history" size={24} color="#002021"/>
            </View>

            <Text style={styles.header}>Renovation for Stephen’s House</Text>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Vendor Description</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Interior Designer</Text>
                        <Text style={styles.infoText}>Rendy Steven</Text>
                    </View>
                    <View style={styles.spacerLine}/>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Company</Text>
                        <Text style={styles.infoText}>Homeez</Text>
                    </View>
                    <View style={styles.spacerLine} />
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Phone Number</Text>
                        <Text style={styles.infoText}>Homeez</Text>
                    </View>
                    <View style={styles.spacerLine} />
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Email</Text>
                        <Text style={styles.infoText}>rendy@homeez.com</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Property Description</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Property</Text>
                        <Text style={styles.infoText}>HDB 3 Room BTO Premium</Text>
                    </View>
                    <View style={styles.spacerLine} />
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Key Collection Date</Text>
                        <Text style={styles.infoText}>24 September 2023</Text>
                    </View>
                    <View style={styles.spacerLine} />
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Address</Text>
                        <Text style={styles.infoText}>Singapore</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Quotation Details</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Quotation</Text>
                        <Text style={styles.infoText}>$100,000,000</Text>
                    </View>
                    <View style={styles.spacerLine} />
                    <View style={styles.containerAttachment}>
                        <Text style={styles.infoLabel}>Attachment</Text>
                        <Image
                            source={{ uri: 'https://s3-alpha-sig.figma.com/img/5401/90a8/9453feb23d57f7e12ee66c0aec504c4e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ff4VEquTSyTFx8TsPM-jmg4oq2ZEtPBQbo7l5R5HZhioJtRS2JB9N72gu-tCh9C2eBdgf1csLEhomBiYIl1nIL23f7eqwfkhMjxq6CicidDwjdlNj8xRqtyklGvvSdr68bBtevg0PTesnzG4Fio2jkwOmoJDY2r-C~~pmcvVvueZIRfaLvrWhKfrOZEp~eJww5kbCE22CjZaNx963gF0mdoL4foaKYSwuZFL0M7R-uPR-f86UvPTogc~rqmFGODb8D2OSxntyhxzg31femw2~37piU3fyikgByVg2nqKR5Y1033kgA7DwVUp80f-QlM~mBRogl2kJgL0RG4cmVmxLw__' }}
                            style={styles.imageAttachment}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

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
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        fontSize: 16,
        fontFamily: 'EuclidCircularA-Medium',
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
    containerAttachment: {
        marginBottom: 16,
    },
    imageAttachment: {
        width: '100%',
        height: 192,
        borderRadius: 10,
        marginTop: 16,
    },
});

export default ProjectDetailsScreen;