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
    Image,
} from 'react-native';
export default class SelfCenter extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={Styles.container}>
                <Image style={{justifyContent:'flex-start',width:'100%',height:190}} resizeMode={Image.resizeMode.stretch} source={require("../../../res/images/navigatop.jpg")}></Image>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#D6D6D6',
    }
});