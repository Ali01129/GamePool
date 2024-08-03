import Splash from './screens/splash';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from './screens/index';
import OnBoarding from './screens/onboarding';
import { StatusBar } from 'react-native';
import Home from './screens/home';
import Box from './components/box';
import SmallBox from './components/smallBox';
import ChangeScreen from './screens/changeScreen';

type RootStackParamList = {
  index: undefined;
  Splash: undefined;
  OnBoarding: undefined;
  home: undefined;
  smallBox: undefined;
  changeScreen: { url: string };
  Details: { itemId: number; otherParam?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSplashVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isSplashVisible) {
        return <Splash />;
    }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Details" component={Box} />
        <Stack.Screen name="smallBox" component={SmallBox} />
        <Stack.Screen name="changeScreen" component={ChangeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
