import { StyleSheet, Text,Image, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../constants/colors';

const Splash = () => {
  return (
    <View style={styles.container}>
        <StatusBar style='light' backgroundColor={colors.primary} />
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
        backgroundColor: colors.primary,
        padding: 16
    },
    img: {
        resizeMode: 'contain',
        width: 300,
    }
});