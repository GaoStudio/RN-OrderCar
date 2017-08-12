import React, {Component, PropTypes} from 'react';
import {
    View, Keyboard, Text, Image, StyleSheet, Animated, Alert, TouchableOpacity
} from 'react-native';
import Input from './../../compontent/Input.js'
import AlertStatus from './../../compontent/AlertStatus.js'
import Button from './../../compontent/Button.js'
import ApiGenerator from  '../../net/ApiGenerator.js'
import Picker from 'react-native-picker';
export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.shcooldata = [];
        this.state = {
            username: '',
            email: '',
            school: '-1',
            password: '',
            iconDistance: new Animated.Value(60),
            top: new Animated.Value(25),
            animation: {
                formPositionLeft: new Animated.Value(614),
                buttonPositionTop: new Animated.Value(1354)
            }
        }
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    _keyboardDidShow() {
        Animated.parallel([
            Animated.timing(this.state.iconDistance, {
                toValue: 0,
                duration: 300,
            }),
            Animated.timing(this.state.top, {
                toValue: 0,
                duration: 300,
            })
        ]).start();
    }

    _keyboardDidHide() {
        Animated.parallel([
            Animated.timing(this.state.iconDistance, {
                toValue: 60,
                duration: 300,
            }),
            Animated.timing(this.state.top, {
                toValue: 25,
                duration: 300,
            })
        ]).start();
    }

    handleChangeInput(stateName, text) {
        this.setState({
            [stateName]: text
        })
    }

    handleRegister() {
    }

    unmountComponent() {
        const timing = Animated.timing;
        Animated.parallel([
            timing(this.state.animation.formPositionLeft, {
                toValue: 614,
                duration: 500,
                delay: 120
            }),
            timing(this.state.animation.buttonPositionTop, {
                toValue: 1354,
                duration: 400,
                delay: 130
            })
        ]).start();
    }


    componentDidMount() {

        Animated.timing(this.state.animation.formPositionLeft, {
            toValue: 0,
            duration: 700,
            delay: 120
        }).start();
        Animated.timing(this.state.animation.buttonPositionTop, {
            toValue: 0,
            duration: 600,
            delay: 130
        }).start();
    }

    getCode() {
        alert("获取验证码")
    }

    selectSchool() {
        if (this.shcooldata.length != 0) {
            this.showSchool();
            return
        }
        ApiGenerator.getInstance().FetchRespsitory().fetchGetData("/api/school/all")
            .then((wrapData) => {
                if (wrapData.status == 1) {
                    this.filterSchool(wrapData.data);
                    this.showSchool();
                }
            }).catch((error) => {
            alert(error)
        });
    }

    filterSchool(data) {
        this.shcooldata.push("随便逛逛")
        data.forEach((items) => {
            this.shcooldata.push(items.shl_name);
        })
    }

    showSchool() {
        Picker.init({
            pickerData: this.shcooldata,
            selectedValue: [0],
            pickerConfirmBtnText: '确认',
            pickerCancelBtnText: '取消',
            pickerConfirmBtnColor: [211, 58, 49, 1],
            pickerCancelBtnColor: [211, 58, 49, 1],
            pickerFontSize: 20,
            pickerTitleText: '选择驾校',
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                this.setState({
                    school: '随便逛逛'
                })
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }

    render() {
        return <View style={{flex: 1}}>
            <View style={loginStyle.loginContainer}>
                <View  onPress={()=>{alert("点击")}} style={{alignItems: 'center'}}>
                    <Animated.Image

                        source={require('../../../res/images/header.png')}
                        style={{width: this.state.iconDistance, height: this.state.iconDistance}}
                        resizeMode="cover"/>
                </View>
                <Animated.View style={[loginStyle.formContainer, {marginTop: this.state.top}]}>
                    <Animated.View style={{position: 'relative', left: this.state.animation.formPositionLeft}}>
                        <Input label="姓名"
                               icon={<Image source={require('../../../res/images/username.png')}
                                            style={{width: 30, height: 30}} resizeMode="cover"/>}
                               value={this.state.username}
                               onChange={this.handleChangeInput.bind(this, 'username')}
                        />
                        <Input label="手机号"
                               icon={<Image source={require('../../../res/images/phonenumber.png')}
                                            style={{width: 31, height: 31}} resizeMode="cover"/>}
                               value={this.state.username}
                               marginTop={10}
                               onChange={this.handleChangeInput.bind(this, 'username')}
                        />
                        <View >
                            <Input label="验证码"
                                   icon={<Image source={require('../../../res/images/yanzhengcode.png')}
                                                style={{width: 30, height: 30}} resizeMode="cover"/>}
                                   value={this.state.email}
                                   marginTop={10}
                                   onChange={this.handleChangeInput.bind(this, 'email')}
                            />
                            <TouchableOpacity onPress={() => this.getCode()} style={{
                                width: 100,
                                height: "100%",
                                right: 5,
                                position: 'absolute',
                                color: '#999999'
                            }}>
                                <View style={{
                                    flex: 1,
                                    marginBottom: 8,
                                    justifyContent: "flex-end",
                                    alignItems: "center"
                                }}>
                                    <Text style={{fontSize: 18, color: '#999999'}}>获 取</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Input label="密    码"
                               icon={<Image source={require('../../../res/images/password.png')}
                                            style={{width: 30, height: 30}} resizeMode="cover"/>}
                               value={this.state.password}
                               marginTop={10}
                               onChange={this.handleChangeInput.bind(this, 'password')}
                               secureTextEntry
                        />
                        <View >
                            <Input label="驾   校"
                                   icon={<Image source={require('../../../res/images/school.png')}
                                                style={{width: 30, height: 30}} resizeMode="cover"/>}
                                   value={this.state.school}
                                   marginTop={10}
                                   inputable={true}
                                   onSelectSchool={() => this.selectSchool()}
                                   onChange={this.handleChangeInput.bind(this, 'email')}
                            />
                        </View>
                    </Animated.View>
                    <Animated.View style={{position: 'relative', top: this.state.animation.buttonPositionTop}}>
                        <Button style={{
                            marginLeft: 15,
                            marginRight: 15,
                            height: 40,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'transparent',
                            borderRadius: 10
                        }} title={'注    册'} onPress={this.handleRegister.bind(this)}>
                        </Button>
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    }
}

const loginStyle = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: 25
    },
    formContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    }
})
