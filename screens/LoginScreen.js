import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React from 'react';
import { SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

const LoginScreen = ({navigation}) => {
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
                    <Image style={styles.loginImage} source={require('../img/login.png')} />
                    <TextInput style={styles.input1} placeholder="Email" onSubmitEditing={Keyboard.dismiss} />
                    <TextInput style={styles.input2} type="password" placeholder="Password" onSubmitEditing={Keyboard.dismiss} />
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={() => navigation.navigate('dashBoard')}>
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
        </View>
    );
}

export default LoginScreen;