/**
 * Created by Administrator on 2017/7/18.
 */
import React, {Component, PropTypes} from 'react';
import {Keyboard,LayoutAnimation,Platform,UIManager,View, Text, Image, StyleSheet, Alert, Animated,TouchableHighlight} from 'react-native';
import Input from './../../compontent/Input.js'
import AlertStatus from './../../compontent/AlertStatus.js'
import Button from './../../compontent/Button.js'
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            iconDistance:new Animated.Value(100),
            animation: {
                usernamePostionLeft: new Animated.Value(795),
                passwordPositionLeft: new Animated.Value(905),
                loginPositionTop: new Animated.Value(1402),
                statusPositionTop: new Animated.Value(1542)
            }
        }
    }

    componentWillMount () {

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow () {
        Animated.timing(this.state.iconDistance, {
            toValue: 0,
            duration: 300,
        }).start();
    }
    _keyboardDidHide () {
        Animated.timing(this.state.iconDistance, {
            toValue: 100,
            duration: 300,
        }).start();
    }
    handleChangeInput(stateName, text) {
        this.setState({
            [stateName]: text
        })
    }

    handePressSignIn() {
        Alert.alert('Button pressed', 'User sign in');
    }

    handlePressSignUp() {
        this.props.navigation.navigate('register');
    }

    handleToHome() {
        Actions.home({type: ActionConst.RESET, disableInteractionCheck: true})
    }

    componentDidMount() {
        const timing = Animated.timing;
        Animated.parallel([
            timing(this.state.animation.usernamePostionLeft, {
                toValue: 0,
                duration: 700
            }),
            timing(this.state.animation.passwordPositionLeft, {
                toValue: 0,
                duration: 900
            }),
            timing(this.state.animation.loginPositionTop, {
                toValue: 0,
                duration: 700
            }),
            timing(this.state.animation.statusPositionTop, {
                toValue: 0,
                duration: 700
            })

        ]).start()
    }

    render() {
        return <View style={{flex:1}}>
            <View style={loginStyle.loginContainer}>
                <View style={{alignItems:'center'}}>
                    <Animated.Image source={require('../../../res/images/icon_car.png')} style={{width:this.state.iconDistance,height:this.state.iconDistance}} resizeMode="cover"/>
                </View>
                <View style={loginStyle.formContainer}>
                    <Animated.View style={{position: 'relative', left: this.state.animation.usernamePostionLeft}}>
                        <Input label="用户名"
                               icon={<Image source={require('../../../res/images/username.png')} style={{width:30,height:30}} resizeMode="cover"/>}
                               value={this.state.username}
                               onChange={this.handleChangeInput.bind(this, 'username')}
                        />
                    </Animated.View>
                    <Animated.View style={{position: 'relative', left: this.state.animation.passwordPositionLeft}}>
                        <Input label="密  码"
                               icon={<Image source={require('../../../res/images/password.png')} style={{width:32,height:32}} resizeMode="cover"/>}
                               value={this.state.password}
                               marginTop={23}
                               onChange={this.handleChangeInput.bind(this, 'password')}
                               secureTextEntry
                        />
                    </Animated.View>
                    <Animated.View style={{position: 'relative', top: this.state.animation.loginPositionTop}}>
                        <Button style={{marginLeft:15,marginRight:15,height:40,marginTop:30,borderWidth:1,borderColor:'transparent',borderRadius:10}} title={'登  录'} onPress={this.handlePressSignUp.bind(this)}>
                        </Button>
                    </Animated.View>

                </View>
            </View>
            <Animated.View style={{position: 'relative', top: this.state.animation.statusPositionTop}}>
                <AlertStatus textHelper="没有账号" textAction="去注册"
                             onPressAction={this.handlePressSignUp.bind(this)}/>
            </Animated.View>
        </View>
    }
}
const loginStyle = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: 30,
    },
    formContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 25
    }
})
