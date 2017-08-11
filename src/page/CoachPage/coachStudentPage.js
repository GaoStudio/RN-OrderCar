/**
 * Created by Administrator on 2017/7/24.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity,
    ListView,
} from 'react-native';
import {TabNavigator} from 'react-navigation'
import { SwipeListView } from 'react-native-swipe-list-view';
class Studying extends Component{
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }
    _renderRow(data){
        return(
            <TouchableHighlight
                onPress={ _ => console.log('You touched me') }
                style={styles.rowFront}
                underlayColor={'#AAA'}
                >
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Image source={require('../../../res/images/icon_car.png')} style={{marginLeft:10,width:60,height:60}} resizeMode="cover"/>
                    <View style={{justifyContent:'space-around',marginLeft:10,flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:16}}>姓    名</Text>
                            <Text style={{fontWeight:'bold'}}> : </Text>
                            <Text style={{textAlign:'left',color:'#D33A31',fontSize:16}}>
                                高大人
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:16}}>电    话</Text>
                            <Text style={{fontWeight:'bold'}}> : </Text>
                            <Text style={{textAlign:'left',fontSize:16}}>
                                18239403949
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    _renderHiddenRow(data, secId, rowId, rowMap){
        return(
            <View style={styles.rowBack}>
                <View style={{flexDirection:'row',flex:1,width:150}}>
                    <TouchableOpacity style={[styles.backRightBtn,{backgroundColor:'#D33A31'}]} onPress={()=>{} }>
                            <Text style={styles.backTextWhite}>毕业</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.backRightBtn,{backgroundColor:'#FE9D00'}]} onPress={()=>{} }>
                        <Text style={styles.backTextWhite}>拒绝</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.backRightBtn,{backgroundColor:'#C6C7CC'}]} onPress={()=>{} }>
                        <Text style={styles.backTextWhite}>拉黑</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <SwipeListView
                dataSource={this.state.dataSource}
                renderRow={ data => (this._renderRow(data))}
                renderHiddenRow={ (data, secId, rowId, rowMap) => (
                    this._renderHiddenRow(data, secId, rowId, rowMap)
                )}
                stopLeftSwipe ={1}
                leftOpenValue={0}
                rightOpenValue={-150}
            />
        )
    }
}
const styles = StyleSheet.create({
    backTextWhite: {
        color: '#FFF'
    },
    rowFront: {
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 80,
    },
    rowBack: {
        alignItems: 'flex-end',
        backgroundColor: '#DDD',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 0,
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        flex:1
    },
});

export const Student = TabNavigator({
    //待审核
    examine:{
        screen:Studying,
        navigationOptions:{
            tabBarLabel: '待审核',
        }

    },
    //学习中
    studying:{
        screen:Studying,
        navigationOptions:{
            tabBarLabel: '学习中',
        }

    },
    //已毕业
    studyend:{
        screen:Studying,
        navigationOptions:{
            tabBarLabel: '已毕业',
        }
    },

    //已拒绝
    studybad:{
        screen:Studying,
        navigationOptions:{
            tabBarLabel: '已拒绝',
        }
    }
},{
    swipeEnabled:false,
    lazy: true,
    backBehavior:'none',
    animationEnabled: false,
    tabBarOptions:{
        inactiveTintColor:'#767676',
        activeTintColor:'#D33A31',
        borderless:false,
        style: {
            height:40,
            backgroundColor: '#dedede',
            justifyContent:'center',
            alignContent:'center',
        },
        labelStyle: {
            fontSize: 14,
        },
        pressColor:'#7D7D7D88',
        tabStyle:{
            height:40,
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center'
        },
        indicatorStyle:{
            backgroundColor: '#D33A31',
            alignContent:'center',
            justifyContent:'center'
        },
    }
})