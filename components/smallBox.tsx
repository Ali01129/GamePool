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
const SmallBox: React.FC<SmallBoxProps> = ({ img,url }) => {
  
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate('changeScreen',{url:url})}}>
      <Image source={img} style={styles.image} />
    </TouchableOpacity>
  );
}

export default SmallBox;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 160,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
