import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import { React, useEffect, useCallback, useContext } from 'react';
import { BackHandler, ScrollView, Alert, StatusBar, StyleSheet, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

function HomeScreen({ route, navigation }) {
    const currRoute = useRoute();
    // const user = useContext(UserContext);
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (currRoute.name !== "Home") {
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
    let [fontsLoaded] = useFonts({
        Lobster_400Regular,
        "WorkSans_700Bold": require("../assets/fonts/WorkSans_700Bold.ttf"),
        "WorkSans_400Regular": require("../assets/fonts/WorkSans_400Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const sendInquiry = () =>
        Alert.alert(
            "Inquiry Sent",
            "Thank you for your interest! We will be sending the response to your email.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.bg}>
                    <ScrollView style={styles.scrollView}>
                        <Image style={styles.homeImage} source={require('../img/main.png')} />
                        <Image style={styles.homePic} source={require('../img/homepic.png')} />
                        <Text style={styles.text1}>S A F E  •  S E C U R E  •  R E L I A B L E</Text>
                        <Text style={styles.text}>
                            We are in the business of digital solutions.
                            FasTech provides complete computer services and IT support to our customers in a friendly and helpful manner.
                            Our team of experts offers a variety of services to local businesses and home.
                        </Text>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle1}
                            activeOpacity={.5}
                            onPress={() => navigation.navigate("Appointment")
                            }>
                            <Text style={styles.TextStyle}> Set an Appointment </Text>
                        </TouchableOpacity>

                        <View style={styles.services}>
                            <Image style={styles.servicesPic} source={require('../img/services.png')} />
                            <Text style={styles.text4}>•  W H A T   W E   D O • </Text>
                            <Text style={styles.text5}>Our Services</Text>

                            <Image style={styles.servicesPic1} source={require('../img/service1.png')} />
                            <Text style={styles.header}>Troubleshooting and Networking</Text>
                            <Text style={styles.desc}>These are the two most common types of computer repair services for businesses and organizations.
                                These include network setup, training, network fixes, and related problems.
                                <TouchableOpacity
                                    activeOpacity={.5}
                                    onPress={() => navigation.navigate('Service1')}>
                                    <Text style={styles.TextStyle3}> Know More Here → </Text>
                                </TouchableOpacity>
                            </Text>

                            <Image style={styles.servicesPic2} source={require('../img/service2.png')} />
                            <Text style={styles.header1}>Hardware and Software Repair</Text>
                            <Text style={styles.desc1}>This is for physical damages that are incurred by the computer or its accessories.
                                This includes installing new hardware, repair or updating software and hardware.
                                <TouchableOpacity
                                    activeOpacity={.5}
                                    onPress={() => navigation.navigate('Service2')}>
                                    <Text style={styles.TextStyle3}> Know More Here → </Text>
                                </TouchableOpacity>
                            </Text>

                            <Image style={styles.servicesPic3} source={require('../img/service3.png')} />
                            <Text style={styles.header2}>Virus and Malware Removal</Text>
                            <Text style={styles.desc2}>In this service computer technicians ensure that the virus will be removed without risking the important data or information on your computer.
                                <TouchableOpacity
                                    activeOpacity={.5}
                                    onPress={() => navigation.navigate('Service3')}>
                                    <Text style={styles.TextStyle4}> Know More Here → </Text>
                                </TouchableOpacity>
                            </Text>

                            <Image style={styles.servicesPic4} source={require('../img/service4.png')} />
                            <Text style={styles.header3}>Data Recovery and Backup Services</Text>
                            <Text style={styles.desc3}>It might not possible for you to recover the data, but professional computer technicians can recover the data by tracking information.
                                <TouchableOpacity
                                    activeOpacity={.5}
                                    onPress={() => navigation.navigate('Service4')}>
                                    <Text style={styles.TextStyle5}> Know More Here → </Text>
                                </TouchableOpacity>
                            </Text>

                        </View>

                        <View style={styles.contact}>
                            <Text style={styles.text6}>•  R E A C H   U S  • </Text>
                            <Text style={styles.text7}>Contact Information</Text>
                        </View>

                        <View style={styles.contactIcons}>

                            <View style={styles.column1}>
                                <View style={styles.items}>
                                    <Icon
                                        raised
                                        name='map'
                                        type='font-awesome'
                                        color='#6610f2' />
                                </View>

                                <View style={styles.itemDesc}>
                                    <Text style={styles.itemHeader}>Address</Text>
                                    <Text>12 Corporate Center, Pasig</Text>
                                </View>

                                <View style={styles.items}>
                                    <Icon
                                        raised
                                        name='envelope'
                                        type='font-awesome'
                                        color='#6610f2' />
                                </View>

                                <View style={styles.itemDesc}>
                                    <Text style={styles.itemHeader}>Email</Text>
                                    <Text>info@fastech.com</Text>
                                </View>
                            </View>

                            <View style={styles.column2}>
                                <View style={styles.items}>
                                    <Icon
                                        raised
                                        name='phone'
                                        type='font-awesome'
                                        color='#6610f2' />
                                </View>

                                <View style={styles.itemDesc}>
                                    <Text style={styles.itemHeader}>Phone</Text>
                                    <Text>+02 639 7848</Text>
                                </View>

                                <View style={styles.items}>
                                    <Icon
                                        raised
                                        name='globe'
                                        type='font-awesome'
                                        color='#6610f2' />
                                </View>

                                <View style={styles.itemDesc}>
                                    <Text style={styles.itemHeader}>Website</Text>
                                    <Text>fastech.ph</Text>
                                </View>
                            </View>

                            <View>
                                <TextInput style={styles.inqiuryField} placeholder="Full Name" onSubmitEditing={Keyboard.dismiss} />
                                <TextInput style={styles.inqiuryField} placeholder="Email Address" onSubmitEditing={Keyboard.dismiss} />
                                <TextInput multiine numberOfLines={4} style={styles.inqiuryField} placeholder="Message Inquiry" onSubmitEditing={Keyboard.dismiss} />
                                <TouchableOpacity
                                    style={styles.SubmitButtonStyle3}
                                    activeOpacity={.5}
                                    onPress={sendInquiry}>
                                    <Text style={styles.TextStyle}> Send Inquiry </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.blank}><Text></Text></View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;