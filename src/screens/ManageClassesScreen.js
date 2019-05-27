import React, { Component } from 'react';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem'
import PropTypes from 'prop-types'

export default class ManageClassesScreen extends Component {
    static defaultProps = {
        data:{
            studentName:"Name",
            studentTitle:"Title"
        }
    };

    onPress = () => {};

    render = () => {
        const screen = {
            ...Dimensions.get('window'),
        };

        const imageSize = 200;

        return (
          <View style={styles.container}>
              <View style={styles.rectangle} />
              <Image source={{uri : 'https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}
                     style={{top: 65, left: 105, position: 'absolute', width: imageSize, height: imageSize, borderRadius: imageSize/2, zIndex: +10}} />
              <View style={styles.circle} />
                <Text style={styles.studentNameStyle}> {this.props.data.studentName} </Text>
                  <Text style={styles.studentTitleStyle}> {this.props.data.studentTitle} </Text>
              <View>
                    <Button style={{color: '#6440A7', backgroundColor: '#6440A7',}} title="Create Class" onPress={() => this.onPress()}/>
              </View>
              <ScrollView style={{borderRadius: 5, left: 10, width: screen.width-20, borderWidth: 1, borderColor:'#6440A7'}} horizontal={false}>
                  <ListItem/>
                  <ListItem/>
              </ScrollView>
          </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    studentNameStyle: {
        width: width,
        fontWeight: 'bold',
        fontSize: 36,
        color: 'grey',
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    studentTitleStyle: {
        fontSize: 24,
        color: 'lightgrey',
        textAlign: 'center',
    },
    rectangle: {
        top: 0,
        width: width,
        height: 300,
        backgroundColor: '#6440A7',
        paddingBottom: 20,
    },
    circle: {
        top: 125,
        position: "absolute",
        width: width,
        height: width,
        borderRadius: width/2,
        backgroundColor: 'white'
    }
});

ManageClassesScreen.propTypes = {
    onFocus: PropTypes.func,
    onPress: PropTypes.func,
    data: PropTypes.object.isRequired,
};
