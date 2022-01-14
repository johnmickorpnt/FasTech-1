import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const MyTimePicker = ({ data }) => {
    const [time, setTime] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShow(Platform.OS === 'ios');
        setTime(currentTime);
        const newTime = selectedTime.toString();
        data(newTime.substring(newTime.indexOf(":") - 2, 21));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View>
            <TouchableOpacity
                activeOpacity={.5}
                onPress={showTimepicker}
                style={timeStyle.btn}>
                <Text style={timeStyle.TextStyle}> Choose Time </Text>
            </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
                    mode={mode}
                    is24Hour={false}
                    display="default"
                    onChange={onChange}
                    
                />
            )}
        </View>
    );
};
const timeStyle = StyleSheet.create({
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
export default MyTimePicker;