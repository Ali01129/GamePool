import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import WebView from 'react-native-webview'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import {colors} from '../constants/colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const { height: screenHeight } = Dimensions.get('window');
type RootStackParamList = {
  home: undefined;
};

const App = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [links, setLinks] = useState<string[]>([]);
  const [linkIndex, setLinkIndex] = useState(0);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get('https://game-pool.qwertyexperts.com/?local=true');
        const data = response.data.result;
    
        // Filter out unwanted URLs
        const links: string[] = data
          .filter((item: any) => {
            return item.url !== 'https://game-pool.qwertyexperts.com/uploads/Fol599913der/plugin.php' &&
                   item.url !== 'https://game-pool.qwertyexperts.com/uploads/Fol320481der/facebook-ad-ios';
          })
          .map((item: any) => item.url);
        setLinks(links);
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };

    fetchLinks();
  }, []);

  const handleIncrement = () => {
    setLinkIndex((prevIndex) => (prevIndex + 1) % links.length);
  };

  const handleDecrement = () => {
    setLinkIndex((prevIndex) => (prevIndex - 1 + links.length) % links.length);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <TouchableOpacity style={{padding:15,backgroundColor:colors.secondary,borderRadius:50,width:55,marginLeft:20,marginBottom:15}} onPress={()=>{navigation.navigate('home')}}>
        <AntDesign name="arrowleft" size={24} color={colors.primary} style={{alignSelf:'center',fontWeight:'bold'}} />
      </TouchableOpacity>

      <View style={styles.webviewContainer}>
        {links.length > 0 && <WebView source={{ uri: links[linkIndex] }} />}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <AntDesign name="caretright" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  webviewContainer: {
    flex: 1,
    marginBottom: 100,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    backgroundColor: 'black',
    padding: 10,
    height: 50,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;