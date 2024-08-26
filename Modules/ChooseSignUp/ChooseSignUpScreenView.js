import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { useFonts } from 'expo-font';
import styles from './ChooseSignUpStyle';

export default function ChooseSignUpScreen({ navigation }) {
    const { width } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = useState(0);

    const [fontsLoaded] = useFonts({
        'EuclidCircularA-Bold': require('../../assets/fonts/EuclidCircularABold.ttf'),
        'EuclidCircularA-SemiBold': require('../../assets/fonts/EuclidCircularASemiBold.ttf'),
    });

    const slides = [
        { icon: require('../../assets/welcome1.png'), text: 'HomePay is partnered with DBS \nhold in trust to ensure your money \nin escrow is kept safe!' },
        { icon: require('../../assets/welcome2.png'), text: 'All Interior Designers are made to \nensure deliverables so that you \ncan approve the work!' },
        { icon: require('../../assets/welcome3.png'), text: 'If issues arise with your \nrenovation, HomePay will provide \nanother vendor at no extra cost!' },
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
                            onPress={() => navigation.navigate('SignIn')}
                        >
                            <Text style={styles.buttonLoginText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonSignUp}
                            onPress={() => navigation.navigate('SignUp')}
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