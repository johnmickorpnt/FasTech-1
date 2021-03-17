import React, { useState } from "react";
import { ScrollView, Alert, StatusBar, StyleSheet, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from "expo-app-loading";
import { PickerComponent } from './components/PickerComponent';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Icon } from 'react-native-elements';
import { Component } from "react";
import Table from "./components/Table";
import MyDatePicker from "./components/MyDatePicker";
import MyTimePicker from "./components/MyTimePicker";

function LoginScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
    "WorkSans_400Regular": require("./assets/fonts/WorkSans_400Regular.ttf"),
    "WorkSans_700Bold": require("./assets/fonts/WorkSans_700Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <SafeAreaView>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <Image style={styles.loginImage} source={require('./img/login.png')} />
          <TextInput style={styles.input1} placeholder="Email" onSubmitEditing={Keyboard.dismiss} />
          <TextInput style={styles.input2} type="password" placeholder="Password" onSubmitEditing={Keyboard.dismiss} />
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={.5}
            onPress={() => navigation.navigate('dashBoard')}>
            <Text style={styles.TextStyle}> Log In </Text>
          </TouchableOpacity>
          <Image style={styles.regIcons} source={require('./img/reg.png')} />
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

function RegisterScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
    "WorkSans_400Regular": require("./assets/fonts/WorkSans_400Regular.ttf"),
    "WorkSans_700Bold": require("./assets/fonts/WorkSans_700Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <SafeAreaView>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.aptView}>
              <Text style={styles.text2}>•  G L A D   T O   A S S I S T   Y O U  •</Text>
              <Text style={styles.text3}>Create an Account</Text>
            </View>
            <Image style={styles.appointmentImage} source={require('./img/apptbg.jpg')} />
            <Image style={styles.appointmentImage1} source={require('./img/iconft.png')} />
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

function SummaryScreen({ navigation }) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <Image style={styles.services1Pic} source={require('./img/appointment.png')} />
            <View style={styles.serviceView1}>
              <Text style={styles.text10}>•  S E E   Y O U  •</Text>
              <Text style={styles.text11}>Appointment Summary</Text>
              <Text style={styles.apptSummary}>Dear Hanz Rondin,{"\n"}{"\n"}
              Your Appointment is now being processed. Here is the summary of your appointment:{"\n"}
              </Text>
              <Text style={styles.apptSummary1}>Full Name: Hanz Rondin{"\n"}
              Contact Number: 91234567899{"\n"}
              Email Address: qhrsrondin@tip.edu.ph{"\n"}
              Service Availed: Virus and Malware Removal{"\n"}
              Date and Time: 2021-03-16 at 10:30 AM{"\n"}
              Status: Pending{"\n"}</Text>
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

function Service1Screen({ navigation }) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <Image style={styles.services1Pic} source={require('./img/service1pic.png')} />
            <View style={styles.serviceView1}>
              <Text style={styles.text8}>•  S E R V I C E S  •</Text>
              <Text style={styles.text9}>Troubleshooting and Networking Installation</Text>
              <Text style={styles.descService}>These are the two most common types of computer repair services for businesses.
              These include network setup, training, network fixes, and related problems. </Text>
              <Text style={styles.headerService}>Performance and Stress Test</Text>
              <Text style={styles.descService}>To perform simulated load testing to identify the crash point or the point where the perceptible slowdown is noticed in the request processing.</Text>
              <Text style={styles.headerService}>Vulnerability Asssessment</Text>
              <Text style={styles.descService}>This assessment is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation, if and whenever needed.</Text>
              <View style={styles.blank}><Text></Text></View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle4}
                activeOpacity={.5}
                onPress={() => navigation.navigate('Appointment')}>
                <Text style={styles.TextStyle}> Set an Appointment </Text>
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

function Service2Screen({ navigation }) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <Image style={styles.services1Pic} source={require('./img/service2pic.png')} />
            <View style={styles.serviceView1}>
              <Text style={styles.text10}>•  S E R V I C E S  •</Text>
              <Text style={styles.text11}>Hardware and Software Repair and Installation</Text>
              <Text style={styles.descService1}>This is for physical damages that are incurred by the computer or its accessories. This includes installing new hardware, repair or updating hardware.
           Software repair services include Operating System and software installation that is based on the terms of MIT's license agreements with software vendors.</Text>
              <View style={styles.blank}><Text></Text></View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle4}
                activeOpacity={.5}
                onPress={() => navigation.navigate('Appointment')}>
                <Text style={styles.TextStyle}> Set an Appointment </Text>
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

function Service3Screen({ navigation }) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <Image style={styles.services2Pic} source={require('./img/service3pic.png')} />
            <View style={styles.serviceView1}>
              <Text style={styles.text8}>•  S E R V I C E S  •</Text>
              <Text style={styles.text9}>Virus and Malware Removal</Text>
              <Text style={styles.descService}>In this service computer technicians ensure that the virus will be removed without risking the important data or information on your computer. You can also get virus removal services online, as well as complete services that include all the steps that are required to get your computer up and running problem-free.</Text>
              <Text style={styles.headerService}>How Does it Happen</Text>
              <Text style={styles.descService}>Often times malware come from sources such as; infected websites, junk mail, malicious banner ads and free of charge programs. People usually fall victims to fraudulent programs such as SpySheriff, also known as Brave Sentry, SpyAxe, SpywareSheriff, Pest Trap, SpyTrooper, Spywareno, and MalwareAlarm.</Text>
              <Text style={styles.headerService}>Removing the Malware</Text>
              <Text style={styles.descService}>Malware embeds itself into your software, hiding and modifying the system's files, making it difficult to remove. Because the average user isn't familiar with the sensitive malware removal utilities, it's better left to a professional. That's why our highly experienced computer experts are always available to work on your case.</Text>
              <Text style={styles.headerService}>What We Can Do</Text>
              <Text style={styles.descService}>Our computer experts use specially designed and developed in-house programs that will clear your system back up to have it running smoothly. Using our specially developed programs also saves you from the hassle of reinstalling Windows and other applications. After we clean your computer from all malware and virus, we install state of the art antivirus software to prevent your computer getting infected once again.</Text>
              <View style={styles.blank}><Text></Text></View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle4}
                activeOpacity={.5}
                onPress={() => navigation.navigate('Appointment')}>
                <Text style={styles.TextStyle}> Set an Appointment </Text>
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

function Service4Screen({ navigation }) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <Image style={styles.services2Pic} source={require('./img/service4pic.png')} />
            <View style={styles.serviceView1}>
              <Text style={styles.text8}>•  S E R V I C E S  •</Text>
              <Text style={styles.text9}>Data Recovery and Backup Services</Text>
              <Text style={styles.descService}>Sometimes, due to issues such as hardware crashes or a virus, your important data might get lost. It might not possible for you to recover the data, but professional computer technicians can recover the data by tracking information.</Text>
              <View style={styles.blank}><Text></Text></View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle4}
                activeOpacity={.5}
                onPress={() => navigation.navigate('Appointment')}>
                <Text style={styles.TextStyle}> Set an Appointment </Text>
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

function AppointmentScreen({ navigation }) {
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
              <PickerComponent />
              
              <View style={styles.datePos}>
                <MyDatePicker/>
              </View>

              <View style={styles.timePos}>
              <MyTimePicker/>
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

function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
    "WorkSans_700Bold": require("./assets/fonts/WorkSans_700Bold.ttf"),
    "WorkSans_400Regular": require("./assets/fonts/WorkSans_400Regular.ttf"),
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
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <Image style={styles.homeImage} source={require('./img/main.png')} />
            <Image style={styles.homePic} source={require('./img/homepic.png')} />
            <Text style={styles.text1}>S A F E  •  S E C U R E  •  R E L I A B L E</Text>
            <Text style={styles.text}>
              We are in the business of digital solutions.
              FasTech provides complete computer services and IT support to our customers in a friendly and helpful manner.
              Our team of experts offers a variety of services to local businesses and home.
            </Text>
            <TouchableOpacity
              style={styles.SubmitButtonStyle1}
              activeOpacity={.5}
              onPress={() => navigation.navigate('Appointment')}>
              <Text style={styles.TextStyle}> Set an Appointment </Text>
            </TouchableOpacity>

            <View style={styles.services}>
              <Image style={styles.servicesPic} source={require('./img/services.png')} />
              <Text style={styles.text4}>•  W H A T   W E   D O • </Text>
              <Text style={styles.text5}>Our Services</Text>

              <Image style={styles.servicesPic1} source={require('./img/service1.png')} />
              <Text style={styles.header}>Troubleshooting and Networking</Text>
              <Text style={styles.desc}>These are the two most common types of computer repair services for businesses and organizations.
              These include network setup, training, network fixes, and related problems.
                <TouchableOpacity
                  activeOpacity={.5}
                  onPress={() => navigation.navigate('Service1')}>
                  <Text style={styles.TextStyle3}> Know More Here → </Text>
                </TouchableOpacity>
              </Text>

              <Image style={styles.servicesPic2} source={require('./img/service2.png')} />
              <Text style={styles.header1}>Hardware and Software Repair</Text>
              <Text style={styles.desc1}>This is for physical damages that are incurred by the computer or its accessories.
              This includes installing new hardware, repair or updating software and hardware.
              <TouchableOpacity
                  activeOpacity={.5}
                  onPress={() => navigation.navigate('Service2')}>
                  <Text style={styles.TextStyle3}> Know More Here → </Text>
                </TouchableOpacity>
              </Text>

              <Image style={styles.servicesPic3} source={require('./img/service3.png')} />
              <Text style={styles.header2}>Virus and Malware Removal</Text>
              <Text style={styles.desc2}>In this service computer technicians ensure that the virus will be removed without risking the important data or information on your computer.
              <TouchableOpacity
                  activeOpacity={.5}
                  onPress={() => navigation.navigate('Service3')}>
                  <Text style={styles.TextStyle4}> Know More Here → </Text>
                </TouchableOpacity>
              </Text>

              <Image style={styles.servicesPic4} source={require('./img/service4.png')} />
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

function SettingsScreen({ navigation }) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./img/whitebg.png')} style={styles.bg}>
          <ScrollView style={styles.scrollView}>
            <Image style={styles.account} source={require('./img/user2.png')} />
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
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Service1" component={Service1Screen} />
      <HomeStack.Screen name="Service2" component={Service2Screen} />
      <HomeStack.Screen name="Service3" component={Service3Screen} />
      <HomeStack.Screen name="Service4" component={Service4Screen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }} >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Summary" component={SummaryScreen} />
    </SettingsStack.Navigator>
  );
}

const AppointmentStack = createStackNavigator();

class AppointmentStackScreen extends Component {
  render() {
    return (
      <AppointmentStack.Navigator screenOptions={{ headerShown: false }} >
        <AppointmentStack.Screen name="Appointment" component={AppointmentScreen} />
        <AppointmentStack.Screen name="Summary" component={SummaryScreen} />
      </AppointmentStack.Navigator>
    );
  }
}


const mainAppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <mainAppStack.Navigator screenOptions={{ headerShown: false }}>
        <mainAppStack.Screen name="LoginScreen" component={LoginScreen} />
        <mainAppStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <mainAppStack.Screen name="dashBoard" component={dashBoard} />
      </mainAppStack.Navigator>
    </NavigationContainer>
  );
}
function dashBoard() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          }
          if (route.name === 'Appointment') {
            iconName = focused
              ? 'ios-create'
              : 'ios-create-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6610f2',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Appointment" component={AppointmentStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>

  );
}
const styles = StyleSheet.create({
  accountDesc: {
    top: 30
  },
  account: {
    resizeMode: 'stretch',
    width: 170,
    height: 170,
    left: 100,
    top: 15,
  },
  inqiuryField: {
    top: 35,
    marginTop: 10,
    marginBottom: 10,
    margin: 27,
    padding: 10,
    borderWidth: 1.0,
    borderColor: '#6610f2',
    fontSize: 17,
    fontFamily: "WorkSans_400Regular",
  },
  itemHeader: {
    fontFamily: "WorkSans_700Bold",
  },
  contactIcons: {
    bottom: 270,
  },
  services: {
    marginTop: 50,
  },
  contact: {
    bottom: 280,
  },
  column1: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    top: 10,
    left: 10,
  },
  column2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    top: 25,
    left: 10,
  },
  items: {
    width: '25%',
  },
  itemDesc: {
    width: '25%',
    right: 30,
    fontFamily: "WorkSans_400Regular",
  },
  header: {
    textAlign: 'right',
    fontSize: 18,
    fontFamily: "WorkSans_700Bold",
    color: "#5f55a5",
    right: 25,
    bottom: 100,
  },
  header1: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: "WorkSans_700Bold",
    color: "#5f55a5",
    left: 25,
    bottom: 190,
  },
  header2: {
    textAlign: 'right',
    fontSize: 18,
    fontFamily: "WorkSans_700Bold",
    color: "#5f55a5",
    right: 25,
    bottom: 280,
  },
  header3: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: "WorkSans_700Bold",
    color: "#5f55a5",
    left: 25,
    bottom: 345,
  },
  headerService: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "WorkSans_700Bold",
    color: "#5f55a5",
    marginTop: 15,
  },
  desc: {
    fontSize: 14,
    fontFamily: "WorkSans_400Regular",
    marginHorizontal: 50,
    bottom: 100,
    textAlign: 'right',
    left: 25,
  },
  desc1: {
    fontSize: 14,
    fontFamily: "WorkSans_400Regular",
    marginHorizontal: 50,
    bottom: 190,
    textAlign: 'left',
    right: 25,
  },
  desc2: {
    fontSize: 14,
    fontFamily: "WorkSans_400Regular",
    marginHorizontal: 50,
    bottom: 270,
    textAlign: 'right',
    left: 25,
  },
  desc3: {
    fontSize: 14,
    fontFamily: "WorkSans_400Regular",
    marginHorizontal: 50,
    bottom: 340,
    textAlign: 'left',
    right: 25,
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    top: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: "WorkSans_400Regular",
    marginHorizontal: 20,
    top: 30,
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    top: 20,
    color: '#6610f2',
  },
  text2: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: '#6610f2',
  },
  text4: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: '#6610f2',
    top: 30,
  },
  text5: {
    textAlign: 'center',
    fontSize: 29,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: 'black',
    top: 30,
    marginBottom: 20,
  },
  text3: {
    textAlign: 'center',
    fontSize: 29,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: 'black',
  },
  text6: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: '#6610f2',
  },
  text7: {
    textAlign: 'center',
    fontSize: 29,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: 'black',
  },
  text8: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: '#6610f2',
  },
  text9: {
    textAlign: 'center',
    fontSize: 29,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 10,
    color: 'black',
    marginBottom: 20,
  },
  text10: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 20,
    color: '#6610f2',
    top: 40,
  },
  text11: {
    textAlign: 'center',
    fontSize: 29,
    fontFamily: "WorkSans_700Bold",
    marginHorizontal: 10,
    color: 'black',
    marginBottom: 60,
    top: 40,
  },
  serviceView1: {
    bottom: 30,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  input1: {
    top: 50,
    margin: 60,
    padding: 10,
    borderBottomWidth: 1.0,
    borderBottomColor: '#6610f2',
    fontSize: 17,
    fontFamily: "WorkSans_400Regular",
  },
  input2: {
    bottom: 50,
    margin: 60,
    padding: 10,
    borderBottomWidth: 1.0,
    borderBottomColor: '#6610f2',
    fontSize: 17,
    fontFamily: "WorkSans_400Regular",
  },
  regIcons: {
    position: 'absolute',
    bottom: 180,
    resizeMode: 'stretch',
    left: 75,
  },
  loginImage: {
    position: 'absolute',
    top: 40,
    height: 320,
    width: 320,
    resizeMode: 'stretch',
    marginLeft: 40,
  },
  homeImage: {
    resizeMode: 'stretch',
    height: 320,
    width: 380,
  },
  services1Pic: {
    resizeMode: 'stretch',
    height: 360,
    width: 380,
  },
  services2Pic: {
    resizeMode: 'stretch',
    height: 370,
    width: 420,
    right: 18,
    top: 0,
  },
  homePic: {
    position: 'relative',
    height: 70,
    width: 370,
    top: 10,
  },
  servicesPic: {
    height: 310,
    width: 300,
    marginLeft: 40,
    top: 40,
  },
  servicesPic1: {
    top: 20,
    opacity: 0.4,
    borderRadius: 20,
  },
  servicesPic2: {
    bottom: 70,
    opacity: 0.4,
    borderRadius: 20,
  },
  servicesPic3: {
    bottom: 160,
    opacity: 0.4,
    borderRadius: 20,
  },
  datePos:{
    bottom: 200, 
  },
  timePos: {
    bottom: 160,
  },
  endPos: {
    top: 600,
  },
  servicesPic4: {
    bottom: 230,
    opacity: 0.4,
    borderRadius: 20,
  },
  aboutPic: {
    borderRadius: 50,
    height: 300,
    width: 300,
    right: 120,
    top: 40,
  },
  descService: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
  },
  descService1: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
  },
  apptSummary: {
    textAlign: 'left',
    justifyContent: 'center',
    marginHorizontal: 20,
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
  },
  apptSummary1: {
    textAlign: 'left',
    justifyContent: 'center',
    marginHorizontal: 20,
    fontFamily: "WorkSans_700Bold",
    fontSize: 16,
  },
  bg: {
    resizeMode: "stretch",
    justifyContent: "center",
    width: 400,
    height: 900,
  },
  SubmitButtonStyle: {
    position: 'absolute',
    top: 520,
    paddingTop: 12,
    paddingBottom: 12,
    width: 200,
    backgroundColor: '#6610f2',
    borderRadius: 30,
    right: 105,
  },
  SubmitButtonStyle1: {
    position: 'relative',
    left: 80,
    paddingTop: 12,
    paddingBottom: 12,
    width: 210,
    backgroundColor: '#6610f2',
    borderRadius: 30,
    top: 45,
  },
  SubmitButtonStyle3: {
    position: 'absolute',
    top: 330,
    paddingTop: 12,
    paddingBottom: 12,
    width: 200,
    backgroundColor: '#6610f2',
    borderRadius: 30,
    right: 97,
  },
  SubmitButtonStyle4: {
    position: 'relative',
    left: 80,
    paddingTop: 12,
    paddingBottom: 12,
    width: 210,
    backgroundColor: '#6610f2',
    borderRadius: 30,
    bottom: 250,
  },
  SubmitButtonStyle5: {
    position: 'relative',
    left: 80,
    paddingTop: 12,
    paddingBottom: 12,
    width: 210,
    backgroundColor: 'white',
    borderRadius: 30,
    bottom: 230,
  },
  TextStyle: {
    fontFamily: "WorkSans_400Regular",
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  TextStyle1: {
    fontFamily: "WorkSans_400Regular",
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
  blank: {
    marginBottom: 250,
  },
  TextStyle2: {
    fontFamily: "WorkSans_400Regular",
    color: '#6610f2',
    fontSize: 16,
    textAlign: 'center',
  },
  TextStyle3: {
    fontFamily: "WorkSans_700Bold",
    color: '#6610f2',
    fontSize: 14,
    top: 10,
  },
  TextStyle4: {
    fontFamily: "WorkSans_700Bold",
    color: '#6610f2',
    fontSize: 14,
    top: 15,
  },
  TextStyle5: {
    fontFamily: "WorkSans_700Bold",
    color: '#6610f2',
    fontSize: 14,
    top: 15,
  },
  TextStyle6: {
    fontFamily: "WorkSans_400Regular",
    color: '#6610f2',
    textAlign: 'center',
    fontSize: 18,
  },
  appointmentImage: {
    opacity: 0.5,
    width: 340,
    height: 930,
    resizeMode: 'stretch',
    top: 75,
    left: 17.5,
  },
  aptView: {
    top: 50,
  },
  aptView1: {
    bottom: 550,
  },
  input3: {
    marginVertical: 15,
    marginHorizontal: 45,
    bottom: 270,
    padding: 10,
    borderBottomWidth: 1.0,
    borderBottomColor: '#6610f2',
    fontSize: 16,
    fontFamily: "Roboto",
  },
  input4: {
    marginVertical: 15,
    marginHorizontal: 45,
    bottom: 140,
    padding: 10,
    borderWidth: 1.0,
    borderColor: '#6610f2',
    fontSize: 16,
    fontFamily: "Roboto",
  },
  SubmitButtonStyle2: {
    position: 'relative',
    left: 80,
    paddingTop: 12,
    paddingBottom: 12,
    width: 210,
    backgroundColor: '#6610f2',
    borderRadius: 30,
    bottom: 250,
  },
  SubmitButtonStyle6: {
    position: 'relative',
    left: 80,
    paddingTop: 12,
    paddingBottom: 12,
    width: 210,
    backgroundColor: '#6610f2',
    borderRadius: 30,
    bottom: 80,
  },
  appointmentImage1: {
    position: 'relative',
    bottom: 820,
    left: 90,
    height: 140,
    width: 180,
    opacity: 0.8,
  }
})

export default App;
