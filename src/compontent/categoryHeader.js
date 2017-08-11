/**
 * Created by Administrator on 2017/7/14.
 */
import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Platform,
    Image,
    Text,
    PixelRatio,
} from 'react-native';
let border = 1 / PixelRatio.get();
export default class CategoryHeader extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    _openDrawer(){
        return(
            <TouchableHighlight underlayColor='#fff' onPress={() => { this.props.nav.navigate('DrawerOpen') } } style={headerStyles.categoryBox}>
                <Image source={require('../../res/images/category.png')} style={headerStyles.category} />
            </TouchableHighlight>
        )
    }
    _backUp(){
        return(
            <TouchableHighlight underlayColor='#fff' onPress={() => { this.props.nav.goBack() } } style={headerStyles.categoryBox}>
                <Image source={require('../../res/images/back.png')} style={headerStyles.back} />
            </TouchableHighlight>
        )
    }
    _renderRight(){
        return(
            <TouchableHighlight underlayColor='#fff' onPress={() => {  this.props.nav.navigate(this.props.rightPress)} } style={headerStyles.rightBox}>
                <Image source={this.props.rightImage} style={{width:30,height:30}} />
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <View style={headerStyles.container}>
                {this.props.type==='home'?this._openDrawer():this._backUp()}
                <View style={{ flex: 1}}>
                    <Text allowFontScaling={false} numberOfLines={1} style={headerStyles.text}>{this.props.title}</Text>
                </View>
                {this.props.right?this._renderRight():<View style={{width:50}}></View>}
            </View>
        );
    }
}
const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        // paddingLeft: 15,
        // paddingRight: 15,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 59 : 50,   // 处理iOS状态栏
        backgroundColor: '#D6D6D6',
        justifyContent: 'space-between',
        alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中,
        borderColor: '#ccc',
        borderBottomWidth: border,
    },
    back: {
        width: 13,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    categoryBox:{
        width:50,
        height:50,
        justifyContent:'center',
        paddingLeft:13},
    rightBox:{
        width:50,
        height:50,
        justifyContent:'center',
        paddingLeft:13},
    category: {
        height: 20,
        width: 24,
    },
});
