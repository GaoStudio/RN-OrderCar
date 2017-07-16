/**
 * Created by gao on 2017-07-16.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableHighlight,
} from 'react-native';
import CategoryHeader from './../../compontent/categoryHeader.js'
export default class SubscribePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    _renderDayItem(item){
        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{width:5,backgroundColor:'#D33A31'}}></View>
                <View style={{backgroundColor:'#D6D6D6',height:80,flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text>7-20</Text>
                    <Text style={{marginTop:4}}>周三</Text>
                </View>
            </View>
        )
    }

    _renderTimeItem(item){
        return(
            <View style={{paddingTop:10,paddingLeft:10,paddingRight:10}}>
                <TouchableHighlight onPress={()=>{alert("预约")}} underlayColor='#fff' style={{ backgroundColor:'#D6D6D6',borderWidth:1,borderColor:'#333'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{margin:10,flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:16}}>时    间</Text>
                            <Text style={{fontWeight:'bold'}}> : </Text>
                            <Text style={{textAlign:'left',color:'#D33A31',fontSize:16}}>
                                15:20~15:45
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:16}}>科    目</Text>
                            <Text style={{fontWeight:'bold'}}> : </Text>
                            <Text style={{textAlign:'left',fontSize:16}}>
                                科目二
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:16}}>可预约</Text>
                                <Text style={{fontWeight:'bold'}}> : </Text>
                                <Text style={{textAlign:'left',fontSize:16}}>
                                    1人
                                </Text>

                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:16}}>已预约</Text>
                                <Text style={{fontWeight:'bold'}}> : </Text>
                                <Text style={{textAlign:'left',fontSize:16}}>
                                    0人
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Image style={{position: 'absolute',right:0,width:50,height:50}} resizeMode={Image.resizeMode.contain} source={require("../../../res/images/one.png")}></Image>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
    render() {
        return (
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{width:'28%'}}>
                        <FlatList
                            data={['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b']}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => this._renderDayItem(item)}
                        />
                    </View>
                    <View style={{width:2,backgroundColor:'#D6D6D6'}}></View>
                    <View style={{width:'72%'}}>
                        <FlatList
                            data={['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b']}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => this._renderTimeItem(item)}
                        />
                    </View>
                </View>
        );
    }
}