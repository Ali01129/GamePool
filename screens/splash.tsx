import { StyleSheet, Text,Image, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const Splash = () => {
  return (
    <View style={styles.container}>
        <StatusBar style='light' backgroundColor="#000000" />
        <Image source={require('../assets/fontbolt.png')} style={styles.img}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 16
    },
    img: {
        resizeMode: 'contain',
        width: 300,
    }
});