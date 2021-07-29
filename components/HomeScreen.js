import React from 'react'
import { StyleSheet, Text, View, Touchable } from 'react-native';
import HomeCameraButton from './HomeCameraButton';


const HomeScreen = () => {
    return (
        <View>
            <HomeCameraButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: 'pink'
    },
    scan_button: {
        backgroundColor: 'yellow'
    }
})

export default HomeScreen
