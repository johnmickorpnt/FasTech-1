import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

function SummaryScreen({ navigation }) {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.services1Pic} source={require('../img/appointment.png')} />
                        <View style={styles.serviceView1}>
                            <Text style={styles.text10}>•  S E E   Y O U  •</Text>
                            <Text style={styles.text11}>Appointment Summary</Text>
                            <Text style={styles.apptSummary}>Dear Hanz Rondin,{"\n"}{"\n"}
                                Your Appointment is now being processed. Here is the summary of your appointment:{"\n"}
                            </Text>
                            <Text style={styles.apptSummary1}>Full Name: Hanz Rondin{"\n"}
                                Contact Number: 91234567899{"\n"}
                                Email Address: qhrsrondin@tip.edu.ph{"\n"}
                                Service Availed: Virus and Malware Removal{"\n"}
                                Date and Time: 2021-03-16 at 10:30 AM{"\n"}
                                Status: Pending{"\n"}</Text>
                            <Text style={styles.apptSummary}>Thank you for trusting us with your next project. Kindly wait for our email for your appointment confirmation and procedures for initial downpayment.
                                We are more than glad to assist you with your needs and we do look forward to meeting you soon. Have a great day ahead!</Text>
                            <View style={styles.blank}><Text></Text></View>
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle4}
                                activeOpacity={.5}
                                onPress={() => navigation.navigate('Appointment')}>
                                <Text style={styles.TextStyle}> Set Another Appointment </Text>
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

export default SummaryScreen;