/**
 * Created by Administrator on 2017/7/14.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
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
                <TouchableHighlight  underlayColor='#f2f2f2' style={{marginTop:5,backgroundColor:'#d6d6d6'}} onPress={()=>{ }}  >
                    <View style={{width:'100%',height:40,flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{height:40,flexDirection:'row',alignItems:'center'}}>
                            <Image style={{marginLeft:15,width:22,height:22}} source={require('../../../res/images/iconmyyuyue.png')}></Image>
                            <Text style={{marginLeft:15,fontSize:16,color:'#333'}}>我的预约</Text>
                        </View>
                        <View style={{height:40,flexDirection:'row',alignItems:'center'}}>
                            <Text style={{marginLeft:15,fontSize:14}}>全部</Text>
                            <Image style={{marginRight:10,width:15,height:15}} source={require('../../../res/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={{backgroundColor:'#999',height:1,width:'100%'}}></View>
                <View style={{width:'100%',height:80,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <TouchableHighlight  underlayColor='#f2f2f2' style={{height:80,width:'33%',justifyContent:'center',backgroundColor:'#d6d6d6'}} onPress={()=>{ }}  >
                        <View style={{alignItems:'center'}}>
                            <Image style={{width:25,height:25}} source={require('../../../res/images/icon_queren.png')}></Image>
                            <Text style={{marginTop:8,fontSize:14}}>待确认</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight  underlayColor='#f2f2f2' style={{height:80,width:'33%',justifyContent:'center',backgroundColor:'#d6d6d6'}} onPress={()=>{ }}  >
                        <View style={{alignItems:'center'}}>
                            <Image style={{width:25,height:25}} source={require('../../../res/images/icon_car.png')}></Image>
                            <Text style={{marginTop:8,fontSize:14}}>待练车</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight  underlayColor='#f2f2f2' style={{height:80,width:'33%',justifyContent:'center',backgroundColor:'#d6d6d6'}} onPress={()=>{ }}  >
                        <View style={{alignItems:'center'}}>
                            <Image style={{width:25,height:25}} source={require('../../../res/images/icon_ok.png')}></Image>
                            <Text style={{marginTop:8,fontSize:14}}>已完成</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight  underlayColor='#f2f2f2' style={{marginTop:5,backgroundColor:'#d6d6d6'}} onPress={()=>{ }} >
                    <View style={{width:'100%',height:50,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{marginLeft:15,width:22,height:22}} source={require('../../../res/images/iconjiaolian.png')}></Image>
                        <Text style={{marginLeft:15,fontSize:16,color:'#333'}}>我的教练</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  underlayColor='#d6d6d6' onPress={()=>{ }} >
                    <View style={{width:'100%',height:60,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{marginLeft:15,width:22,height:22}} source={require('../../../res/images/iconmyyuyue.png')}></Image>
                        <Text style={{marginLeft:15,fontSize:16,color:'#333'}}>我的预约</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#cdcdcd',
    }
});