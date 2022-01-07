import React, { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Component } from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SummaryScreen from "./screens/SummaryScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Service1Screen from "./screens/services/Service1Screen";
import Service2Screen from "./screens/services/Service2Screen";
import Service3Screen from "./screens/services/Service3Screen";
import Service4Screen from "./screens/services/Service4Screen";
import AppointmentScreen from "./screens/AppointmentScreen";
import HomeScreen from "./screens/HomeScreen";


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


export default App;
