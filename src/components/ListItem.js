import React, {PureComponent} from 'react';
import {Dimensions, TouchableHighlight, View, Text} from "react-native";

export default class ListItem extends PureComponent {
  static defaultProps = {
    onFocus: () => {
    },
    onPress: () => {
    },
  };

  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    const screen = {
      ...Dimensions.get('window'),
    };

    const { focused } = this.state;

    return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Text style={ {
              fontSize:24,
              fontWeight: 'bold',
              color : '#6440A7',
              paddingLeft: 15,
              width: screen.width,
              height: 40,
            }}  ellipsizeMode = "tail">
              { "Class Name" }
            </Text>
            <Text style={ {
              fontSize:18,
              color : '#6440A7',
              paddingLeft: 15,
              width: screen.width,
              height: 40,
            }}  ellipsizeMode = "tail">
              { "Class Info" }
            </Text>
            <Text style={ {
              fontSize:18,
              color : '#6440A7',
              paddingLeft: 15,
              width: screen.width,
              height: 40,
            }}  ellipsizeMode = "tail">
              { "Number of Participants" }
            </Text>
          </View>
        </View>
    );
  }

}
