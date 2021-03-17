import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
export const PickerComponent = () => {
    const placeholder = {
        label: 'Type of Service...',
        value: null,
        color: '#D3D3D3',
    };
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            bottom: 260,
        }}>
            <View style={{ borderBottomWidth: 1, width: 295 , borderColor: "#6610f2"}}>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Hardware & Software Repair and Installation', value: '1' },
                        { label: 'Data Recovery & Backup Services ', value: '2' },
                        { label: 'Troubleshooting & Networking ', value: '3' },
                        { label: 'Hardware & Software repair and Installation', value: '4' },
                    ]}
                    placeholder={placeholder}
                    useNativeAndroidPickerStyle={true}
                    style={{
                        inputAndroid: {
                            width: 300,
                            fontSize: 16,
                            borderRadius: 5,
                            color: 'black',
                            padding: 5
                        }
                    }}
                />
            </View>
        </View>
    );
};
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, 
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 25,
        color: 'black',
        paddingRight: 30, 
    },
});


