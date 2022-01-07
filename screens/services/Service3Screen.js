import styles from '../../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

function Service3Screen({ navigation }) {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.services2Pic} source={require('../../img/service3pic.png')} />
                        <View style={styles.serviceView1}>
                            <Text style={styles.text8}>•  S E R V I C E S  •</Text>
                            <Text style={styles.text9}>Virus and Malware Removal</Text>
                            <Text style={styles.descService}>In this service computer technicians ensure that the virus will be removed without risking the important data or information on your computer. You can also get virus removal services online, as well as complete services that include all the steps that are required to get your computer up and running problem-free.</Text>
                            <Text style={styles.headerService}>How Does it Happen</Text>
                            <Text style={styles.descService}>Often times malware come from sources such as; infected websites, junk mail, malicious banner ads and free of charge programs. People usually fall victims to fraudulent programs such as SpySheriff, also known as Brave Sentry, SpyAxe, SpywareSheriff, Pest Trap, SpyTrooper, Spywareno, and MalwareAlarm.</Text>
                            <Text style={styles.headerService}>Removing the Malware</Text>
                            <Text style={styles.descService}>Malware embeds itself into your software, hiding and modifying the system's files, making it difficult to remove. Because the average user isn't familiar with the sensitive malware removal utilities, it's better left to a professional. That's why our highly experienced computer experts are always available to work on your case.</Text>
                            <Text style={styles.headerService}>What We Can Do</Text>
                            <Text style={styles.descService}>Our computer experts use specially designed and developed in-house programs that will clear your system back up to have it running smoothly. Using our specially developed programs also saves you from the hassle of reinstalling Windows and other applications. After we clean your computer from all malware and virus, we install state of the art antivirus software to prevent your computer getting infected once again.</Text>
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

export default Service3Screen;