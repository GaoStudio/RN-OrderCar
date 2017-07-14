/**
 * Created by Administrator on 2017/7/14.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
export default class SelfCenter extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={Styles.container}><Text>侧滑</Text></View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#D6D6D6',
    }
});