import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { PickerComponent } from '../components/PickerComponent';
import MyDatePicker from '../components/MyDatePicker';
import MyTimePicker from "../components/MyTimePicker";


function AppointmentScreen({ navigation }) {
    return (
        <View>
            <SafeAreaView>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.aptView}>
                            <Text style={styles.text2}>•  G L A D   T O   A S S I S T   Y O U  •</Text>
                            <Text style={styles.text3}>Set An Appointment</Text>
                        </View>
                        <Image style={styles.appointmentImage} source={require('../img/apptbg.jpg')} />
                        <Image style={styles.appointmentImage1} source={require('../img/iconft.png')} />
                        <View style={styles.aptView1}>
                            <TextInput style={styles.input3} placeholder="Full Name" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Phone" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Email" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Home Address" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <PickerComponent />

                            <View style={styles.datePos}>
                                <MyDatePicker />
                            </View>

                            <View style={styles.timePos}>
                                <MyTimePicker />
                            </View>
                            <TextInput multiine numberOfLines={5} style={styles.input4} placeholder="Elaborate Technical Concern" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />

                            <TouchableOpacity
                                style={styles.SubmitButtonStyle6}
                                activeOpacity={.5}
                                onPress={() => navigation.navigate('Summary')}>
                                <Text style={styles.TextStyle}> Set an Appointment </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}

export default AppointmentScreen;