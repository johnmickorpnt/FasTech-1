import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Table from '../components/Table';

function SettingsScreen({ navigation }) {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.account} source={require('../img/user2.png')} />
                        <View style={styles.accountDesc}>
                            <Text style={styles.text8}>•  D A S H B O A R D  •</Text>
                            <Text style={styles.text9}>Account Settings</Text>
                            <View style={{ padding: 5, paddingRight: 15 }}>
                                <Table />
                            </View>
                            <View style={styles.blank}><Text></Text></View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}

export default SettingsScreen;