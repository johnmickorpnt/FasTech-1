import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import { React, useReducer, useState, Component, useEffect } from 'react';
import { BackHandler, Alert, ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

function RegisterScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    var validated = false;
    const navigate = (screen) => {
        (screen) ? navigation.navigate(screen, {msg:"nice"}) : (console.log("OK Pressed"));
    };
    const showMsg = (header, msg, screen) => {
        Alert.alert(
            header,
            msg,
            [
                { text: "OK", onPress: navigate(screen) }
            ],
            { cancelable: false }
        );
    };
    const createUser = () => {
        let numRegex = new RegExp("^[0-9]*$");
        console.log(phone);
        console.log();
        validated = ((firstName.length !== null && firstName !== '') &&
            (lastName.length !== null && lastName !== '') &&
            (email.length !== null && email !== '') &&
            ((phone.length >= 11 && !phone.length <= 11) && numRegex.test(phone)) &&
            (password === confirmPassword))
            ? (true) : (false);
        if (validated) {
            const payload = {
                "firstname": firstName,
                "lastname": lastName,
                "phone": phone,
                "email": email,
                "password": password
            };

            var formBody = [];
            for (var property in payload) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(payload[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }

            formBody = formBody.join("&");
            fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: formBody
            }).then(async res => {
                try {
                    const jsonRes = JSON.parse(await res.text());
                    if (res.status !== 200) {
                        showMsg("Error", jsonRes.message);
                    }
                    else {
                        showMsg("Success", "You have successfully created an account.", "LoginScreen");
                    }
                } catch (err) {
                    console.log(err);
                }
            });
        }
        else {
            showMsg("Notice", "Please fill up all necessary information.");
        }
    };

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
                            <TextInput style={styles.input3} placeholder="First Name" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setFirstName} />
                            <TextInput style={styles.input3} placeholder="Last Name" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setLastName} />
                            <TextInput style={styles.input3} placeholder="Phone" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setPhone} />
                            <TextInput style={styles.input3} placeholder="Email" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setEmail} />
                            {/* <TextInput style={styles.input3} placeholder="Home Address" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setAddress} /> */}
                            <TextInput style={styles.input3} placeholder="Password" secureTextEntry={true} placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setPassword} />
                            <TextInput style={styles.input3} placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setConfirmPassword} />
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle2}
                                activeOpacity={.5}
                                onPress={createUser}>
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