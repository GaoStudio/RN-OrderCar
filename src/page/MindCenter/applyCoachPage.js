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
import Picker from 'react-native-picker';
export default class ApplyCoachPage extends Component {
    constructor(props){
        super(props);
        this.data = [];
        for(var i=0;i<100;i++){
            this.data.push(i);
        }
    }
    selectSchool(){
        Picker.init({
            pickerData: this.data,
            selectedValue: [59],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnColor:[211,58,49,1],
            pickerCancelBtnColor:[211,58,49,1],
            pickerFontSize:20,
            pickerTitleText:'选择驾校',
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }
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
                        <View style={{flex:1,justifyContent:'space-between'}}>
                            <View style={{flex:1,borderBottomWidth:1,justifyContent:'center'}}>
                                <TextInput  placeholder ="姓名" underlineColorAndroid="transparent" style={{marginLeft:10,padding:0,fontSize:16}}></TextInput>
                            </View>
                            <View style={{flex:1,borderBottomWidth:1,justifyContent:'center'}}>
                                <TextInput  placeholder ="电话" underlineColorAndroid="transparent" style={{marginLeft:10,padding:0,fontSize:16}}></TextInput>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <TouchableHighlight underlayColor={'#ffffff00'} onPress={()=>{this.selectSchool()}}>
                                    <Text style={{marginLeft:10,padding:0,fontSize:16}}>驾校</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center',padding:10}}>
                    <View style={{backgroundColor:'#D33A31',height:20,width:4}}></View>
                    <Text style={{marginLeft:5,fontSize:16}}>身份证明</Text>
                </View>
                <View>
                    <View style={{borderWidth:1,marginLeft:10,marginRight:10,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <View style={{alignItems:'center',justifyContent:'center'}}><Text style={{margin:8,fontSize:16}}>手持身份证</Text></View>
                            <View style={{height:1,backgroundColor:'#333333'}}></View>
                            <View>
                                <Image style={{margin:10,width:150,height:100}} resizeMode={Image.resizeMode.center} source={require("../../../res/images/carddemo.jpg")}>
                                </Image>
                            </View>
                        </View>
                        <View style={{width:1,backgroundColor:'#333333'}}></View>
                        <View style={{flex:1}}>
                            <View style={{alignItems:'center',justifyContent:'center'}}><Text style={{margin:8,fontSize:16}}>示例</Text></View>
                            <View style={{height:1,backgroundColor:'#333333'}}></View>
                            <View>
                                <Image style={{margin:10,width:150,height:100}} resizeMode={Image.resizeMode.center} source={require("../../../res/images/carddemo.jpg")}>
                                </Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center',padding:10}}>
                    <View style={{backgroundColor:'#D33A31',height:20,width:4}}></View>
                    <Text style={{marginLeft:5,fontSize:16}}>资质证明</Text>
                </View>
                <View>
                    <View style={{borderWidth:1,marginLeft:10,marginRight:10,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <View style={{alignItems:'center',justifyContent:'center'}}><Text style={{margin:8,fontSize:16}}>教练证/上岗证明</Text></View>
                            <View style={{height:1,backgroundColor:'#333333'}}></View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image style={{margin:10,width:320,height:200}} resizeMode={Image.resizeMode.center} source={require("../../../res/images/carddemo.jpg")}>
                                </Image>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableHighlight underlayColor={'#d6d6d6'} onPress={()=>{}} style={{margin:10,backgroundColor:'#999999'}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text  style={{fontSize:18,margin:10}}>
                            提交审核
                        </Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}