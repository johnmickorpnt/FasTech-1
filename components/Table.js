import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, View } from 'react-native';
import { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";


function Table({ data }) {

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => item.apt_id}
            renderItem={({ item }) => (
                <View>
                    <Row style={customStyles.dataRow}>
                        <Col>
                            <Row style={customStyles.medCol}>
                                <Text style={{ fontWeight: "bold" }}>{item.service}</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Date: {item.date}</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Time: {item.time}</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={customStyles.verticalAlign}>
                                <TouchableOpacity style={
                                    item.status === "pending" ? (customStyles.btnApprovalContainer) :
                                        (item.status === "payment" ? (customStyles.btnPaymentContainer) :
                                            (item.status === "servicing") ? (customStyles.btnServicingContainer) :
                                                (item.status === "declined" || item.status === "cancelled") ? (customStyles.btnDeclinedContainer) : (customStyles.btnCompleteContainer))
                                }>
                                    <Text style={customStyles.btnText}>{item.status}</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={customStyles.maxHeight}>
                                <Text style={customStyles.centerText}>
                                    {
                                        item.status === "pending" ? "Cancel Appointment" :
                                            (item.status === "payment" ? "For Payment" :
                                                (item.status === "servicing") ? "View Details" :
                                                    (item.status === "declined" || item.status === "cancelled") ? ("Cancelled or Declined") : ("Evaluate your technician"))
                                    }
                                </Text>
                            </Row>
                        </Col>
                    </Row>
                </View>
            )}
            style={{ marginBottom: "10%" }}
        />
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
        // borderBottomWidth: 1
    },
    headerCotainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "green",
        minWidth: 50,
        minHeight: 50,
        maxHeight: 50

    },
    headerFont: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "white"
    },
    verticalAlign: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1,
        minHeight: 100,
        // borderBottomWidth: 1
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
});

export default Table;