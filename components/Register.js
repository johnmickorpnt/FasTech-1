import React, { useState } from "react";
import { ScrollView, Alert, Picker, StatusBar, StyleSheet, SafeAreaView, Button, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from "expo-app-loading";
import DatePicker from 'react-native-datepicker';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Icon } from 'react-native-elements';
// import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Component } from "react";
import Table from "./components/Table";

export default class Register extends Component {
    render() {
        return (
            <View>
                <SafeAreaView>
                    <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.aptView}>
                                <Text style={styles.text2}>•  G L A D   T O   A S S I S T   Y O U  •</Text>
                                <Text style={styles.text3}>Set An Appointment</Text>
                            </View>
                            <Image style={styles.appointmentImage} source={require('./img/apptbg.jpg')} />
                            <Image style={styles.appointmentImage1} source={require('./img/iconft.png')} />
                            <View style={styles.aptView1}>
                                <TextInput style={styles.input3} placeholder="Full Name" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                                <TextInput style={styles.input3} placeholder="Phone" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                                <TextInput style={styles.input3} placeholder="Email" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                                <TextInput style={styles.input3} placeholder="Home Address" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />

                                <Picker
                                    selectedValue={selectedValue}
                                    style={styles.input3}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Type of Service" />
                                    <Picker.Item label="Troubleshooting and Networking Installation" value="1" />
                                    <Picker.Item label="Hardware and Software Repair" value="2" />
                                    <Picker.Item label="Virus and Malware Removal" value="3" />
                                    <Picker.Item label="Data Recovery and Backup Services" value="4" />
                                </Picker>
                                <TextInput style={styles.input3} placeholder="Date of Appointment" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                                <TextInput style={styles.input3} placeholder="Time Appointment" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                                <TextInput multiine numberOfLines={5} style={styles.input4} placeholder="Elaborate Technical Concern" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                                <TouchableOpacity
                                    style={styles.SubmitButtonStyle2}
                                    activeOpacity={.5}
                                    onPress={() => navigation.navigate('Summary')}>
                                    <Text style={styles.TextStyle}> Set an Appointment </Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </ImageBackground>
                </SafeAreaView>
            </View>
        )
    }
}