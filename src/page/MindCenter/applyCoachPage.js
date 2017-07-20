/**
 * Created by Administrator on 2017/7/20.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    View,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
export default class ApplyCoachPage extends Component {
    render(){
        return(
            <ScrollView style={{backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                    <View style={{backgroundColor:'#D33A31',height:20,width:4}}></View>
                    <Text style={{marginLeft:5,fontSize:16}}>基本信息</Text>
                </View>
                <View>
                    <View style={{borderWidth:1,marginLeft:10,marginRight:10,flexDirection:'row'}}>
                        <Image style={{margin:10,width:90,height:120}} resizeMode={Image.resizeMode.center} source={require("../../../res/images/logo.jpg")}></Image>
                        <View style={{width:1,backgroundColor:'#333333'}}></View>
                        <View style={{flex:1}}>
                            <TextInput  placeholder ="姓名" underlineColorAndroid="transparent" style={{padding:0,fontSize:16,margin:5}}></TextInput>
                            <View style={{height:1,backgroundColor:'#333333'}}></View>
                            <TextInput  placeholder ="姓名" underlineColorAndroid="transparent" style={{padding:0,fontSize:16,margin:5}}></TextInput>
                            <View style={{height:1,backgroundColor:'#333333'}}></View>
                            <TextInput  placeholder ="姓名" underlineColorAndroid="transparent" style={{padding:0,fontSize:16,margin:5}}></TextInput>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}