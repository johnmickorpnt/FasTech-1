import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React, { useState } from 'react';
import { Alert, ToastAndroid, SafeAreaView, ScrollView, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

const LoginScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reqMessage, setReqMessage] = useState('');
    const showError = (message) => {
        const isNotRegistered = (message !== "User email is not registered") ? (true) : (false);
        const options = (isNotRegistered) ? (
            [
                { text: "Try again", onPress: () => setPassword('') }
            ]
        ) :
            (
                [
                    {
                        text: "Cancel", onPress: () => console.log("Cancelled.")
                    },
                    {
                        text: "Sign Up", onPress: () => navigation.navigate("RegisterScreen")
                    }
                ]
            );
        Alert.alert(
            "Notice",
            message,
            options,
            { cancelable: true }
        );
    }
    const onLogin = (token) => {
        fetch(`${API_URL}/private`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(async res => {
            try {
                const jsonRes = JSON.parse(await res.text());
                if (res.status !== 200) {
                    setReqMessage(jsonRes.message);
                }
                else {
                    navigation.navigate('dashBoard',{
                        user:jsonRes.user.id,
                        token: token
                    });
                }
            } catch (error) {
                console.log(error)
            }
        });
    };

    const loginSubmit = () => {
        if ((email !== null && email.trim() !== "") && (password !== null && password !== "")) {
            const payload = {
                "email": email,
                "password": password
            };
            fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(async res => {
                try {
                    const jsonRes = JSON.parse(await res.text());
                    if (res.status !== 200) {
                        showError(jsonRes.message);
                    }
                    else {
                        onLogin(jsonRes.token);
                    }
                } catch (err) { console.log(err); }
            });
        }
        else { showError("Please fillup your email or password."); }
    }

    let [fontsLoaded] = useFonts({
        Lobster_400Regular,
        "WorkSans_400Regular": require("../assets/fonts/WorkSans_400Regular.ttf"),
        "WorkSans_700Bold": require("../assets/fonts/WorkSans_700Bold.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <Image style={styles.loginImage} source={require('../img/login.png')} />
                    <TextInput style={styles.input1} placeholder="Email" onSubmitEditing={Keyboard.dismiss} onChangeText={setEmail} />
                    <TextInput style={styles.input2} type="password" placeholder="Password" onSubmitEditing={Keyboard.dismiss} onChangeText={setPassword} secureTextEntry={true} value={password} />
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={loginSubmit}>
                        <Text style={styles.TextStyle}> Log In </Text>
                    </TouchableOpacity>
                    <Image style={styles.regIcons} source={require('../img/reg.png')} />
                    <Text style={styles.TextStyle1}>Not yet a FasTech member?</Text>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.TextStyle2}> Sign Up here </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        </ScrollView>
    );
}

export default LoginScreen;