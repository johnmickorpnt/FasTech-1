import React, { useCallback, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";


export default function MyDatePicker({ data }) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        const tempDate = JSON.stringify(selectedDate);
        console.log(tempDate);
        console.log(tempDate !== undefined);
        if (tempDate !== undefined) {
            console.log(selectedDate);
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            const newDate = selectedDate.toString();
            data(newDate.substring(0, newDate.indexOf(':') - 3));
        }
        else {
            console.log("Cancelled");
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return (
        <View>
            <View>
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={showDatepicker}
                    style={dateStyle.btn}>
                    <Text style={dateStyle.TextStyle}> Choose Date </Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    minimumDate={tomorrow}
                />
            )}
        </View>
    );
};

const dateStyle = StyleSheet.create({
    TextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
    },
    btn: {
        left: 40,
        paddingTop: 5,
        paddingBottom: 5,
        width: 300,
        borderWidth: 1,
        borderColor: '#6610f2',
        borderRadius: 20,
    }
});
