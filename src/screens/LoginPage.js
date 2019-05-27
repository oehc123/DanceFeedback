import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { white } from 'ansi-colors';

var widthDim = Dimensions.get('window').width; //full width
var heightDim = Dimensions.get('window').height; //full height

class LoginPage extends Component {
    render() {
        return (
            <View>
                <View style={styles.purpleTop}>
                    <Text style={styles.titleStyle}>Dance</Text>
                    <Text style={styles.titleStyle}>FeedBack</Text>
                    <Text style={styles.titleStyle}>App</Text>
                </View>
                <View style={{marginTop: 60}}>
                    <View style={styles.textInput}>
                        <TextInput 
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Username"
                            //onChangeText={(text) => this.setState({text})}
                            //value={this.state.text}
                        />
                    </View>

                    <View style={styles.textInput}>
                    <TextInput 
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        placeholder="Password"
                        //onChangeText={(text) => this.setState({text})}
                        //value={this.state.text}
                        />
                    </View>

                    <View style={styles.textInput}>
                        <TouchableOpacity style={styles.button}
                            //onPress={this.onPress}
                        >
                            <Text style={{color: 'white', fontWeight: 'bold' }}> LogIn </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textInput}>
                        <TouchableOpacity style={styles.button}
                            //onPress={this.onPress}
                        >
                            <Text style={{color: 'white', fontWeight: 'bold' }}> CreateAccount </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textInput}>
                        <Text> Did you forget your Username or Password? </Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default LoginPage;

const styles = StyleSheet.create({
    purpleTop: {
        width: widthDim,
        height: heightDim/2,
        backgroundColor: '#6440A7',
        justifyContent: 'center',
    },
    titleStyle: {
        textAlign: 'center',
        //fontFamily: 'gotham',   //add font in project
        fontFamily: 'Cochin',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    textInput:{
        marginTop:30,
        marginLeft: 50,
        marginRight: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#6440A7',
        padding: 10
      },
});