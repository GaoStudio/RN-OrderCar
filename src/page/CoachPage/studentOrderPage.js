import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';

import {TabNavigator} from 'react-navigation'
 class OrderPage extends Component {
    render(){
        return(
            <View>
                <Text>全部订单</Text>
            </View>
        )
    }
}
export const StudentOrderPage = TabNavigator({
    //待审核
    student_all:{
        screen:OrderPage,
        navigationOptions:{
            tabBarLabel: '全部',
        }

    },
    //学习中
    student_queren:{
        screen:OrderPage,
        navigationOptions:{
            tabBarLabel: '待确认',
        }

    },
    //已毕业
    student_lianche:{
        screen:OrderPage,
        navigationOptions:{
            tabBarLabel: '待练车',
        }
    },

    //已拒绝
    student_wancheng:{
        screen:OrderPage,
        navigationOptions:{
            tabBarLabel: '已完成',
        }
    }
},{
    swipeEnabled:true,
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