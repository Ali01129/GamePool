import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Box from '../components/box';
import SmallBox from '../components/smallBox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  index: undefined;
  home: undefined;
};
//https://game-pool.qwertyexperts.com/uploads/Fol173130der/html5/
const Home = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:15,flexDirection:'row',alignItems:'center'}}>
        <AntDesign name="home" style={styles.title}/>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.type}>Arcade</Text>
        <Text style={styles.type}>Puzzle</Text>
        <Text style={styles.type}>Action</Text>
        <Text style={styles.type}>Sports</Text>
      </View>
      <View style={styles.box}>
        <Box/>
      </View>
      <View style={styles.box}>
        <SmallBox img={require('../assets/2.jpg')} url='https://game-pool.qwertyexperts.com/uploads/Fol602623der/html5/'/>
        <SmallBox img={require('../assets/4.png')} url="https://game-pool.qwertyexperts.com/uploads/Fol320481der/facebook-ad-ios/" />
      </View>
      <View style={styles.box}>
        <SmallBox img={require('../assets/5.jpg')} url='https://game-pool.qwertyexperts.com/uploads/Fol118178der/html5/' />
        <SmallBox img={require('../assets/3.png')} url='https://game-pool.qwertyexperts.com/uploads/Fol589881der/facebook-ad-ios/'/>
      </View>
      <Pressable style={styles.button} onPress={()=>{navigation.navigate('index')}}>
        <Text style={styles.btnText}>Infinite Scroll</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
  },
  title:{
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  box:{
    justifyContent:'center',
    marginTop:20,
    flexDirection: 'row',
  },
  type:{
    padding: 15,
    color: colors.secondary,
    backgroundColor:'#000d16',
    borderRadius: 10,
    marginHorizontal: 5,
    fontSize: 16,
  },
  button:{
    marginTop: 20,
    width: '100%',
    height: 60,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnText:{
    textAlign: 'center',
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  }
})