/**
 * Created by Administrator on 2017/7/14.
 */
import React, { Component } from 'react';
import {DrawerNavigator,StackNavigator} from 'react-navigation'
import SelfCenter from './page/MindCenter/selfCenter.js'
import MainPage from './page/HomePage/mainPage.js'
import MessagePage from './page/HomePage/messagePage.js'
import CategoryHeader from './compontent/categoryHeader.js'
const Home = DrawerNavigator({
    mainPage: {
        screen: MainPage,
    }},{
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <SelfCenter />
});
export const Main = StackNavigator({
    home: {
        screen: Home,
        navigationOptions:{
            header:null
        }
    },
    message: {
        screen: MessagePage,
        navigationOptions:({navigation})=>{
            return({
                header:<CategoryHeader title='消息' nav={navigation}/>

            })
        }
    }
});