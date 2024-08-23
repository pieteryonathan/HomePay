import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { useFonts } from 'expo-font';

export default function ChooseSignUpScreen({ navigation }) {
    const { width } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = useState(0);

    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../assets/fonts/EuclidCircularASemiBold.ttf'),
    });

    const slides = [
        { icon: require('../assets/welcome1.png'), text: 'HomePay is partnered with DBS \nhold in trust to ensure your money \nin escrow is kept safe!' },
        { icon: require('../assets/welcome2.png'), text: 'All Interior Designers are made to \nensure deliverables so that you \ncan approve the work!' },
        { icon: require('../assets/welcome3.png'), text: 'If issues arise with your \nrenovation, HomePay will provide \nanother vendor at no extra cost!' },
    ];

    const handleIndexChanged = (index) => {
        setCurrentIndex(index);
    };

    const getProgressBars = () => {
        return slides.map((_, index) => (
            <View
                key={index}
                style={[
                    styles.progressBar,
                    currentIndex >= index ? styles.activeBar : styles.inactiveBar,
                ]}
            />
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                {getProgressBars()}
            </View>
            <Swiper
                loop={false}
                onIndexChanged={handleIndexChanged}
                paginationStyle={{ position: 'absolute', top: -9999 }} // Hide default pagination
            >
                {slides.map((slide, index) => (
                    <View key={index} style={styles.slide}>
                        <View style={styles.spacerTop} />
                        <Image source={slide.icon} style={styles.icon} />
                        <View style={styles.spacerBottomButton} />
                        <Text style={styles.text}>{slide.text}</Text>
                        <TouchableOpacity
                            style={styles.buttonLogin}
                            onPress={() => console.log('Button A Pressed')}
                        >
                            <Text style={styles.buttonLoginText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonSignUp}
                            onPress={() => console.log('Button B Pressed')}
                        >
                            <Text style={styles.buttonSignUpText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.bottomSpacer} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
}

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
        width: (Dimensions.get('window').width - 48) / 3,
    },
    inactiveBar: {
        backgroundColor: '#cccccc',
        width: (Dimensions.get('window').width - 48) / 3,
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
        fontWeight: 700,
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
        fontWeight: 600,
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
        fontWeight: 600,
        fontFamily: 'EuclidCircularA-SemiBold'
    },
    bottomSpacer: {
        height: 160,
    }
});