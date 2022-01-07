import styles from '../../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

function Service2Screen({ navigation }) {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.services1Pic} source={require('../../img/service2pic.png')} />
                        <View style={styles.serviceView1}>
                            <Text style={styles.text10}>•  S E R V I C E S  •</Text>
                            <Text style={styles.text11}>Hardware and Software Repair and Installation</Text>
                            <Text style={styles.descService1}>This is for physical damages that are incurred by the computer or its accessories. This includes installing new hardware, repair or updating hardware.
                                Software repair services include Operating System and software installation that is based on the terms of MIT's license agreements with software vendors.</Text>
                            <View style={styles.blank}><Text></Text></View>
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle4}
                                activeOpacity={.5}
                                onPress={() => navigation.navigate('Appointment')}>
                                <Text style={styles.TextStyle}> Set an Appointment </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle5}
                                activeOpacity={.5}
                                onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.TextStyle6}> Back to Home </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}

export default Service2Screen;