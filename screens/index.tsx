import React, { useState, useRef } from 'react';
import { StyleSheet, View, PanResponder, TouchableOpacity,StatusBar } from 'react-native';
import Webview from './webView';

let list: string[] = [
  'https://cloud.2dkit.com/builds/opmz69mtln1m6l',
  'https://cloud.2dkit.com/builds/5rxttkjn64m1kz',
  'https://cloud.2dkit.com/builds/exwzx5ih7a2n0b',
  'https://cloud.2dkit.com/builds/2matcjz7ml7mvt',
  'https://cloud.2dkit.com/builds/apc4tk919l9fn5',
  'https://cloud.2dkit.com/builds/sus8td08jzu4yg',
];

export default function App() {
  const [linkIndex, setLinkIndex] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt) => {
        return evt.nativeEvent.touches.length === 2; //mean 2 finger touches
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return evt.nativeEvent.touches.length === 2;
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < -50) {
          // Swiped up
          setLinkIndex((prevIndex) => (prevIndex + 1) % list.length);
        } else if (gestureState.dy > 50) {
          // Swiped down
          setLinkIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Webview link={list[linkIndex]} />
      <View style={styles.buttonsContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
  },
});
