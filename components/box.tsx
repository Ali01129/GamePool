import { Image, StyleSheet, View, ImageSourcePropType,TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface SmallBoxProps {
  img: ImageSourcePropType;
  url: string;
}
type RootStackParamList = {
  changeScreen: { url: string };
};

const Box = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate('changeScreen',{url:'https://game-pool.qwertyexperts.com/uploads/Fol173130der/html5/'})}}>
      <Image source={require('../assets/1st.jpg')} style={styles.image} />
    </TouchableOpacity>
  )
}

export default Box

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        borderWidth:1,
        borderColor:colors.secondary,
        borderRadius:10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      borderRadius:10,
    },
});