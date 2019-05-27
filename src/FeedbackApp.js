import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './screens/LoginPage';

class FeedbackApp extends Component {
    render() {
        return (
            <View>
                <LoginPage />
            </View>
        );
    }
}
export default FeedbackApp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});