import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import {
 Actions
} from 'react-native-router-flux';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <View>
                <Text>Enter Your name: </Text>
                <TextInput
                    onChangeText={(text)=>{
                        this.setState({
                            name: text
                        });
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity
                    style={Styles.button}
                    onPress={()=>{
                        Actions.chat({
                            namwa: this.state.name,
                        });
                    }}
                >
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    button: {
        padding: 10,
        marginLeft: 20
    }
});
export default Home;