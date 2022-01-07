import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

function RegisterScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        Lobster_400Regular,
        "WorkSans_400Regular": require("../assets/fonts/WorkSans_400Regular.ttf"),
        "WorkSans_700Bold": require("../assets/fonts/WorkSans_700Bold.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View>
            <SafeAreaView>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.aptView}>
                            <Text style={styles.text2}>•  G L A D   T O   A S S I S T   Y O U  •</Text>
                            <Text style={styles.text3}>Create an Account</Text>
                        </View>
                        <Image style={styles.appointmentImage} source={require('../img/apptbg.jpg')} />
                        <Image style={styles.appointmentImage1} source={require('../img/iconft.png')} />
                        <View style={styles.aptView1}>
                            <TextInput style={styles.input3} placeholder="Full Name" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Phone" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Email" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Home Address" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Password" secureTextEntry={true} placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TextInput style={styles.input3} placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} />
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle2}
                                activeOpacity={.5}
                                onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={styles.TextStyle}> Create Account </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}

export default RegisterScreen;