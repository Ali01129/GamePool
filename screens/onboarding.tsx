import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {colors} from '../constants/colors';

type RootStackParamList = {
  index: undefined;
  home: undefined;
};

const OnBoarding: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleGetStartedPress = (): void => {
    navigation.navigate('home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.content}>
        <Entypo name="game-controller" size={80} color="white" style={{ alignSelf: 'center', marginVertical: 40 }} />
        <Text style={styles.title}>Welcome to GamePool!</Text>
        <Text style={styles.subtitle}>Instructions:</Text>
        <View style={{ padding: 10 }}>
          <Text style={styles.instructions}>
            1 - Swipe up with two fingers to move to the next game.{'\n\n'}
            2 - Swipe down with two fingers to go back to the last game.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStartedPress}>
        <Text style={styles.buttonText}>Get Started</Text>
        <AntDesign name="arrowright" size={28} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  instructions: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  getStartedButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
});

export default OnBoarding;
