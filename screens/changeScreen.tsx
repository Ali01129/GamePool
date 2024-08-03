import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { useNavigation, NavigationProp, RouteProp } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import WebView from 'react-native-webview';

// Define your RootStackParamList to include `home` and any params you might use
type RootStackParamList = {
    index: undefined;
    home: undefined;
    ChangeScreen: { url: string };
};

// Type for the route prop
type ChangeScreenRouteProp = RouteProp<RootStackParamList, 'ChangeScreen'>;

interface ChangeScreenProps {
    route: ChangeScreenRouteProp;
}

const ChangeScreen: React.FC<ChangeScreenProps> = ({ route }) => {
    const { url } = route.params;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => { navigation.navigate('home'); }}>
                <AntDesign name="arrowleft" size={24} color={colors.primary} style={styles.icon} />
            </TouchableOpacity>
            <WebView source={{ uri: url }} style={styles.webView} />
        </View>
    );
};

export default ChangeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 18,
        padding: 15,
        backgroundColor: colors.secondary,
        borderRadius: 50,
        width: 55,
        zIndex: 1,
    },
    icon: {
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    webView: {
        flex: 1,
    },
});
