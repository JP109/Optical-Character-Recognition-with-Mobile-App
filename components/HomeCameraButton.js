import React from 'react'
import { StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';

const HomeCameraButton = () => {
    return (
        <TouchableOpacity onPress={() => console.log('Camera clicked!')}>
            <View style={style.home_camera_button}>
                <Text>+ Camera</Text>
            </View>
        </TouchableOpacity>
    )
}

style = StyleSheet.create({
    home_camera_button: {
        backgroundColor: 'yellow',
        borderRadius: 100,
        width: 90,
        height: 90,
    }
})

export default HomeCameraButton
