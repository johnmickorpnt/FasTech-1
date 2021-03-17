import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Table extends Component {
    render() {
        return (
            <Grid>
                <Col>
                    <Row style={customStyles.headerCotainer}>
                        <Text style={customStyles.headerFont}>Appointment</Text>
                    </Row>
                    <Row style={customStyles.dataRow}>
                        <Col>
                            <Row style={customStyles.medCol}>
                                <Text style={{ fontWeight: "bold" }}>Hardware & Software Repair and Installation</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Date: 2021-03-26</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Time: 2:00 PM</Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={customStyles.dataRow}>
                        <Col>
                            <Row style={customStyles.medCol}>
                                <Text style={{ fontWeight: "bold" }}>Data Recovery  & Backup Services</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Date: 2021-03-23</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Time: 11:30 AM</Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={customStyles.dataRow}>
                        <Col>
                            <Row style={customStyles.medCol}>
                                <Text style={{ fontWeight: "bold"}}>Troubleshooting & Networking installation</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Date: 2021-03-20</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Time: 1:00 PM</Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={customStyles.dataRow}>
                        <Col>
                            <Row style={customStyles.medCol}>
                                <Text style={{ fontWeight: "bold" }}>Hardware & Software repair and installation</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Date: 2021-03-18</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Time: 9:00 AM</Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={customStyles.dataRow}>
                        <Col>
                            <Row style={customStyles.medCol}>
                                <Text style={{ fontWeight: "bold" }}>Virus and Malware Removal</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Date: 2021-03-16</Text>
                            </Row>
                            <Row style={customStyles.smallCol}>
                                <Text>Time: 10:30 AM</Text>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={customStyles.headerCotainer}>
                        <Text style={customStyles.headerFont}>Status</Text>
                    </Row>
                    <Row style={customStyles.verticalAlign}>
                        <TouchableOpacity style={customStyles.btnCompleteContainer}>
                            <Text style={customStyles.btnText}>Complete</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={customStyles.verticalAlign}>
                        <TouchableOpacity style={customStyles.btnServicingContainer}>
                            <Text style={customStyles.btnText}>For Servicing</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={customStyles.verticalAlign}>
                        <TouchableOpacity style={customStyles.btnPaymentContainer}>
                            <Text style={customStyles.btnText}>For Payment</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={customStyles.verticalAlign}>
                        <TouchableOpacity style={customStyles.btnDeclinedContainer}>
                            <Text style={customStyles.btnText}>Declined</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={customStyles.verticalAlign}>
                        <TouchableOpacity style={customStyles.btnApprovalContainer}>
                            <Text style={customStyles.btnText}>For Approval</Text>
                        </TouchableOpacity>
                    </Row>
                </Col>
                <Col>
                    <Row style={customStyles.headerCotainer}>
                        <Text style={customStyles.headerFont}>Actions</Text>
                    </Row>
                    <Row style={customStyles.maxHeight}>
                        <Text style={customStyles.centerText}>Evaluate the Technician</Text>
                    </Row>
                    <Row style={customStyles.maxHeight}>
                        <Text style={customStyles.centerText}>View Details    </Text>
                    </Row>
                    <Row style={customStyles.maxHeight}>
                        <Text style={customStyles.centerText}>For Payment</Text>
                    </Row>
                    <Row style={customStyles.maxHeight}>
                        <Text style={customStyles.centerText}>View Details</Text>
                    </Row>
                    <Row style={customStyles.maxHeight}>
                        <Text style={customStyles.centerText} >Cancel Appointment</Text>
                    </Row>
                </Col>
            </Grid>
        );
    }
}
const customStyles = StyleSheet.create({
    firstCol:{
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
});
