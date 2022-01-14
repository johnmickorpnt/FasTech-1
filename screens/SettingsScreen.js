import styles from '../components/styles';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from "expo-app-loading";
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Alert, ScrollView, StyleSheet, SafeAreaView, View, Keyboard, TextInput, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Table from '../components/Table';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { Col, Row, Grid } from "react-native-easy-grid";
const API_URL = Platform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

function SettingsScreen({ navigation, route }) {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    const isFocused = useIsFocused();
    const logOut = () => {
        fetch(`${API_URL}/myAppointments/${route.params.user}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${route.params.token}`
            }
        })
            .then(async res => {
                const jsonRes = JSON.parse(await res.text());
                setData(jsonRes);
            })
    };
    const [data, setData] = useState({});
    const showError = (status, msg) => {
        Alert.alert(
            `HTTP Code error ${status}`,
            msg,
            [
                { text: "Ok", onPress: () => console.log("Clicked.") }
            ],
            { cancelable: true }
        )
    }
    useFocusEffect(
        useCallback(() => {
            if (isFocused) {
                fetch(`${API_URL}/myAppointments/${route.params.user}`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${route.params.token}`
                    }
                })
                    .then(async res => {
                        const jsonRes = JSON.parse(await res.text());
                        if (res.status !== 200) {
                            showError(res.status, "Error");
                            setData("");
                        }
                        else {
                            if (Object.keys(jsonRes).length <= 0) {
                                setData("");
                            }
                            else {
                                setData(jsonRes);
                            }
                        }
                    })
            }
        })
    );
    const renderTable = () => {
        if (Object.keys(data).length <= 0) {
            return <Text style={styles.text8}> You have no set appointments.</Text>;
        } else {
            return <Table data={data} />;
        }
    }
    return (
        <View>
            <SafeAreaView style={{ height: height, padding: "3%" }}>
                <ImageBackground source={require('../img/whitebg.png')} style={styles.customBg}>
                    <Image style={styles.account} source={require('../img/user2.png')} />
                    <View style={styles.accountDesc}>
                        <Text style={styles.text8}>•  D A S H B O A R D  •</Text>
                        <Text style={styles.text9}>Account Settings</Text>
                        <View style={{ padding: 5, paddingRight: 15 }}>
                        </View>
                    </View>
                    {renderTable()}
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}

const customStyles = StyleSheet.create({
    firstCol: {
        width: 150,
        backgroundColor: "pink"
    },
    centerText: {
        textAlign: "center",
        textAlignVertical: "center",
        color: '#6610f2',
    },
    maxHeight: {
        minHeight: 100,
        maxHeight: 200,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1,
        borderBottomWidth: 1
    },
    headerCotainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "green",
        minWidth: 50,
        minHeight: "1%",
        paddingHorizontal: "1%",
        width: "100%",
        flexGrow: 1
    },
    headerFont: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
    verticalAlign: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1,
        minHeight: 100,
        borderBottomWidth: 1
    },
    medCol: {
        height: 70
    },
    smallCol: {
        height: 50,
        borderRadius: 25
    },
    dataRow: {
        height: "auto",
        padding: 7,
        minHeight: 180,
        borderBottomWidth: 1
    },
    btnCompleteContainer: {
        elevation: 8,
        backgroundColor: "green",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btnText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    btnServicingContainer: {
        elevation: 8,
        backgroundColor: "#a434eb",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btnPaymentContainer: {
        elevation: 8,
        backgroundColor: "#00c4c7",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btnDeclinedContainer: {
        elevation: 8,
        backgroundColor: "red",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btnApprovalContainer: {
        elevation: 8,
        backgroundColor: "#bd7200",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btnLogoutContainer: {
        backgroundColor: "#6610f2",
        borderRadius: 50,
        paddingHorizontal: "2%",
        margin: "1%"
    },
    table: {
        height: "100%"
    }
});
export default SettingsScreen;