import styles from '../../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import { React, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { BackHandler, ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';


function Service1Screen({ navigation, route }) {
    console.log(route.params);
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.services1Pic} source={require('../../img/service1pic.png')} />
                        <View style={styles.serviceView1}>
                            <Text style={styles.text8}>•  S E R V I C E S  •</Text>
                            <Text style={styles.text9}>Troubleshooting and Networking Installation</Text>
                            <Text style={styles.descService}>These are the two most common types of computer repair services for businesses.
                                These include network setup, training, network fixes, and related problems. </Text>
                            <Text style={styles.headerService}>Performance and Stress Test</Text>
                            <Text style={styles.descService}>To perform simulated load testing to identify the crash point or the point where the perceptible slowdown is noticed in the request processing.</Text>
                            <Text style={styles.headerService}>Vulnerability Asssessment</Text>
                            <Text style={styles.descService}>This assessment is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation, if and whenever needed.</Text>
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
                                onPress={() => navigation.navigate('dashBoard')}>
                                <Text style={styles.TextStyle6}> Back to Home </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}

export default Service1Screen;