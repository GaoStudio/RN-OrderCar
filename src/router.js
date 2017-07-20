/**
 * Created by Administrator on 2017/7/14.
 */
import React, { Component } from 'react';
import {DrawerNavigator,StackNavigator} from 'react-navigation'
import SelfCenter from './page/MindCenter/selfCenter.js'
import MainPage from './page/HomePage/mainPage.js'
import MessagePage from './page/HomePage/messagePage.js'
import SubscribePage from './page/HomePage/subscribePage'
import CategoryHeader from './compontent/categoryHeader.js'
import LoginPage from './page/LoginRegister/loginPage.js'
import RegisterPage from './page/LoginRegister/registerPage.js'
import ApplyCoachPage from './page/MindCenter/applyCoachPage.js'
const Home = DrawerNavigator({
    mainPage: {
        screen: MainPage,
    }},{
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: (props) => <SelfCenter  {...props}/>
});
export const Main = StackNavigator({
    //项目主页
    home: {
        screen: Home,
        navigationOptions:{
            header:null
        }
    },
    //消息页面
    message: {
        screen: MessagePage,
        navigationOptions:({navigation})=>{
            return({
                header:<CategoryHeader title='消息' nav={navigation}/>

            })
        }
    },
    //预约界面
    subscribe:{
        screen: SubscribePage,
        navigationOptions:({navigation})=>{
            return({
                header:<CategoryHeader title={navigation.state.params.name} nav={navigation}/>
            })
        }
    },
    //登录界面
    login:{
        screen: LoginPage,
        navigationOptions:({navigation})=>{
            return({
                header:<CategoryHeader title='登录' nav={navigation}/>

            })
        }
    },
    //注册界面
    register:{
        screen: RegisterPage,
        navigationOptions:({navigation})=>{
            return({
                header:<CategoryHeader title='注册' nav={navigation}/>
            })
        }
    },
    //教练认证
    applyCoach:{
        screen: ApplyCoachPage,
        navigationOptions:({navigation})=>{
            return({
                header:<CategoryHeader title='申请教练' nav={navigation}/>
            })
        }
    }
});