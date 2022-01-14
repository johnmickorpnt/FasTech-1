import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, Alert, useNavigationParam, ScrollView, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { PickerComponent } from '../components/PickerComponent';
import MyDatePicker from '../components/MyDatePicker';
import MyTimePicker from "../components/MyTimePicker";
import { useFocusEffect, useNavigation, useScrollToTop } from "@react-navigation/native";
const API_URL = Platform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

function AppointmentScreen({ navigation, route }) {
    const scrollRef = useRef(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState('');
    const [issue, setIssue] = useState('');
    const [errorList, setErrorList] = useState('');
    function toTop () {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }
    useEffect(() => {
        const renew = navigation.addListener("focus", () => {
            setName('');
            setPhone('');
            setEmail('');
            setAddress('');
            setDate('');
            setTime('');
            setIssue('');
            setErrorList('');
            toTop();
        });
        if (errorList.length !== 0)
            showError(errorList);
    }, [errorList]);
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    function isValidated() {
        let inputs = [name, phone, email, address, date, time, service];
        let errors = [];
        let valid = false;
        for (let x = 0; x < 7; x++) {
            let input = (x === 0) ? ("Name") :
                ((x === 1) ? ("Phone") :
                    (x === 2) ? ("Email") :
                        (x === 3) ? ("Address") :
                            (x === 4) ? ("Date") :
                                (x === 5) ? ("Time") : ("Service"));
            if (inputs[x] === null || inputs[x] === '') {
                errors.push(`${input} is empty.`)
            }
            else {
                switch (x) {
                    case 1: {
                        if (inputs[x].trim().length !== 11) {
                            errors.push("Phone Number should be 11 characters long.");
                        }
                        if (!/^\d+$/.test(inputs[x])) {
                            errors.push("Phone number should not contain letters.");
                        }
                        break;
                    }
                    case 2: {
                        if (!validateEmail(inputs[x]))
                            errors.push("Please make sure that your email is valid.");
                        break;
                    }
                    case 3: {
                        if (inputs[x].trim().length === 0)
                            errors.push("Address is empty.")
                    }
                    case 6: {
                        if (inputs[x].trim() === 0)
                            errors.push("Please choose the your service of choice.");
                        break;
                    }
                }
            }
        }
        handleList((errors.length !== 0) ? (errors) : (''));
        return (errors.length !== 0) ? (false) : (true);
    }

    function handleList(value) {
        console.log(value);
        setErrorList(value);
    }

    const showError = (msg) => {
        let list = '';
        if (Array.isArray(msg)) {
            msg.forEach(element => {
                list += `- ${element} \n`;
            });
        }
        Alert.alert(
            "Validation Error",
            ((list !== '') ? (list) : msg),
            [
                { text: "OK" }
            ],
            { cancelable: false }
        )
    }

    const createAppointment = () => {
        if (isValidated()) {
            const ticket = new Date().valueOf();
            const payload = {
                "user": route.params.user,
                "name": name,
                "service": service,
                "phone": phone,
                "email": email,
                "address": address,
                "date": date,
                "time": time,
                "issue": issue,
                "ticket": ticket,
            };
            fetch(`${API_URL}/createAppointment`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${route.params.token}`
                },
                method: "POST",
                body: JSON.stringify(payload)
            }).then(async res => {
                try {
                    const jsonRes = JSON.parse(await res.text());
                    console.log(jsonRes);
                    navigation.navigate('Summary', { payload })
                } catch (err) {
                    console.log(err);
                }
            })
        }
    }
    useScrollToTop(scrollRef);
    // DATE FORMAT : D M d Y

    return (
        <View>
            <SafeAreaView>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={100}>
                        <ScrollView style={styles.scrollView} ref={scrollRef}>
                            <View style={styles.aptView}>
                                <Text style={styles.text2}>•  G L A D   T O   A S S I S T   Y O U  •</Text>
                                <Text style={styles.text3}>Set An Appointment</Text>
                            </View>
                            <Image style={styles.appointmentImage} source={require('../img/apptbg.jpg')} />
                            <Image style={styles.appointmentImage1} source={require('../img/iconft.png')} />
                            <View style={styles.aptView1}>
                                <TextInput style={styles.input3} placeholder="Full Name" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setName} value={name} />
                                <TextInput style={styles.input3} placeholder="Phone" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setPhone} value={phone} />
                                <TextInput style={styles.input3} placeholder="Email" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setEmail} value={email}/>
                                <TextInput style={styles.input3} placeholder="Home Address" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setAddress} value={address} />
                                <TextInput style={styles.input3} placeholder="Date of Appointment" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} value={date} editable={false} />
                                <TextInput style={styles.input3} placeholder="Time of Appointment" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} value={time} editable={false} />
                                <PickerComponent data={setService} />

                                <View style={styles.datePos}>
                                    <MyDatePicker data={setDate} />
                                </View>

                                <View style={styles.timePos}>
                                    <MyTimePicker data={setTime} />
                                </View>
                                <TextInput multiline numberOfLines={5} style={styles.input4} placeholder="Elaborate Technical Concern" placeholderTextColor="black" onSubmitEditing={Keyboard.dismiss} onChangeText={setIssue} value={issue} />

                                <TouchableOpacity
                                    style={styles.SubmitButtonStyle6}
                                    activeOpacity={.5}
                                    onPress={createAppointment}>
                                    <Text style={styles.TextStyle}> Set an Appointment </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </SafeAreaView>
        </View>

    );
}

export default AppointmentScreen;