import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import LoginPage from './screens';

class TodoApp extends Component {
    render() {
        return (
            <LoginPage />
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});