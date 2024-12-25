import {StatusBar} from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {colors} from "../styles/color";


export default function GreetingScreen() {
    return (
        <ImageBackground
            source={require('../assets/splash.jpg')} // Replace with your image path
            style={styles.container}
        >
            <View>
                <StatusBar style="auto"/>
            </View>
            <Text style={styles.logo}>SMARAT</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        top:200,
        fontSize: 64,
        color: colors.white,
        fontFamily: 'Montserrat_900Black',
    }
});
