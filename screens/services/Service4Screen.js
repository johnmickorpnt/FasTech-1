import styles from '../../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

function Service4Screen({ navigation }) {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.services2Pic} source={require('../../img/service4pic.png')} />
                        <View style={styles.serviceView1}>
                            <Text style={styles.text8}>•  S E R V I C E S  •</Text>
                            <Text style={styles.text9}>Data Recovery and Backup Services</Text>
                            <Text style={styles.descService}>Sometimes, due to issues such as hardware crashes or a virus, your important data might get lost. It might not possible for you to recover the data, but professional computer technicians can recover the data by tracking information.</Text>
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

export default Service4Screen;