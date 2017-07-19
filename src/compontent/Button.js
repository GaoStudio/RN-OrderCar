/**
 * Created by Administrator on 2017/7/18.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text,TouchableHighlight} from 'react-native';
export default class Button extends Component {
    render() {
        return(
            <TouchableHighlight underlayColor={'#d6d6d6'} onPress={this.props.onPress} style={this.props.style}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text  style={{fontSize:18}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}