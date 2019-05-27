import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import LoginPage from './screens';

class TodoApp extends Component {
    render() {
        return (
            <Text style={styles.container}> Welcome to the login page</Text>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});