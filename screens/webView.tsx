import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

interface WebviewProps {
  link: string;
}

const Webview: React.FC<WebviewProps> = ({ link }) => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: link }}
    />
  );
};

export default Webview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
