/**
 * Created by Administrator on 2017/7/14.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    View,
} from 'react-native';
import CategoryHeader from './../../compontent/categoryHeader.js'
export default class MessagePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={{flex:1,flexDirection:'row'}}>
                <Text>消息</Text>
            </View>
        );
    }
}