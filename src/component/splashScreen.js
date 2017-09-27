import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-gifted-chat';

class ScreenSplash extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Image
                    style={Styles.logo}
                    source={{ uri: "http://www.theblogstudio.com/wp/wp-content/uploads/2013/06/iconmonstr-speech-bubble-14-icon.png" }}
                />
                <Text style={Styles.logoText}>That's up</Text>
                <Text style={Styles.subLogoText}>Developed and Designed By Ahmed Raza Qadri</Text>
                <TouchableOpacity
                    onPress={()=>Actions.hom}
                    >
                    <Text>Get Started</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const Styles = StyleSheet.create({

    container: {
        backgroundColor: '#E91E63',
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        color: '#F3E5F5',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logo: {
        width: 200,
        height: 200
    },
    subLogoText: {}





})


export default ScreenSplash;