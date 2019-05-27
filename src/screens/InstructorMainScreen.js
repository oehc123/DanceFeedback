import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ManageClassesScreen from "./ManageClassesScreen";


class InstructorMainScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <ManageClassesScreen data={{studentName:"Name", studentTitle:"Title"}}/>
            </View>
        );
    }
}
export default InstructorMainScreen;
