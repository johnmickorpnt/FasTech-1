import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const MyDatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity
            activeOpacity={.5}
            onPress={showDatePicker} 
            style={dateStyle.btn}>
            <Text style={dateStyle.TextStyle}> Choose Date </Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};
const dateStyle = StyleSheet.create({
    TextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
    },
      btn:{
        left: 40,
        paddingTop: 5,
        paddingBottom: 5,
        width: 300,
        borderWidth: 1,
        borderColor: '#6610f2',
        borderRadius: 20,
    }
});
export default MyDatePicker;