import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import {React, useCallback} from 'react';
import { Alert, BackHandler, ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {useFocusEffect, useRoute} from "@react-navigation/native";

function SummaryScreen({ navigation, route }) {
    const currRoute = useRoute();
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (currRoute.name !== "Summary") {
                    return false;
                } else {

                    Alert.alert("Exit app",
                        "Are you sure to quit the application?",
                        [
                            { text: "No", onPress: () => console.log("Cancelled") },
                            { text: "Yes", onPress: () => BackHandler.exitApp() }
                        ],
                        { cancelable: false }
                    )
                    return true;
                }
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.services1Pic} source={require('../img/appointment.png')} />
                        <View style={styles.serviceView1}>
                            <Text style={styles.text10}>•  S E E   Y O U  •</Text>
                            <Text style={styles.text11}>Appointment Summary</Text>
                            <Text style={styles.apptSummary}>Dear {route.params.payload.name},{"\n"}{"\n"}
                                Your Appointment is now being processed. Here is the summary of your appointment:{"\n"}
                            </Text>
                            <Text style={styles.apptSummary1}>Full Name: {route.params.payload.name}{"\n"}
                                Contact Number: {route.params.payload.phone}{"\n"}
                                Email Address: {route.params.payload.email}{"\n"}
                                Service Availed:{route.params.payload.service}{"\n"}
                                Date and Time: {route.params.payload.date} at {route.params.payload.time}{"\n"}
                                Status: Pending {"\n"}</Text>
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