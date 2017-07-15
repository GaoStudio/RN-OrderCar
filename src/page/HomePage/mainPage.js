/**
 * Created by Administrator on 2017/7/14.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    Button,
    View,
    TouchableHighlight,
    Image,
    FlatList
} from 'react-native';
import CategoryHeader from './../../compontent/categoryHeader.js'
import TouchableItem from "react-navigation/src/views/TouchableItem";
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    _renderItem(item){
        return(
            <View style={{paddingTop:5,paddingLeft:5,paddingRight:5}}>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('message')}} underlayColor='#fff' style={{ backgroundColor:'#D6D6D6',borderWidth:1,borderColor:'#333'}}>
                    <View style={{flex:1,flexDirection:'row',marginLeft:10,marginTop:8,marginBottom:8}}>
                        <Image style={{width:90,height:120}} resizeMode={Image.resizeMode.center} source={require("../../../res/images/logo.jpg")}></Image>
                        <View style={{flexDirection:'column',width:'76%',flex:1,marginLeft:10}}>
                            <View style={{flex:1,justifyContent:'center',flexDirection:'column',marginRight:10}}>
                                <Text style={{fontWeight:'bold',fontSize:18,color:'#333'}}>教练</Text>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{fontSize:16}}>科目</Text>
                                        <View style={{width:'100%',height:3,backgroundColor:'#D33A31'}}></View>
                                    </View>
                                    <Text style={{fontWeight:'bold'}}> : </Text>
                                    <Text style={{fontSize:16}}>科目一</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:16}}>车辆</Text>
                                    <Text style={{fontWeight:'bold'}}> : </Text>
                                    <Text style={{width:'85%',textAlign:'left',fontSize:16}}>
                                       佚名
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:16}}>类型</Text>
                                    <Text style={{fontWeight:'bold'}}> : </Text>
                                    <Text style={{width:'85%',textAlign:'left',fontSize:16}}>测试</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:16}}>手机</Text>
                                    <Text style={{fontWeight:'bold'}}> : </Text>
                                    <Text style={{width:'85%',textAlign:'left',fontSize:16}}>18836889488</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <CategoryHeader type="home" title='主页' nav={this.props.navigation}/>
                <FlatList
                    data={['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b']}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => this._renderItem(item)}
                />
            </View>
        );
    }
}