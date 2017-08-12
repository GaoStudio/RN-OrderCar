import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {getStyleFromProps} from './../utils';
import TextFont from './TextFont.js'
import Button from "./Button";

// Distance label top with input container default
const LABEL_DEFAULT_TOP = 18;
const LABEL_DEFAULT_TOP_FOCUS = 0;

// Label size when animated
const LABEL_FONT_SIZE = 18;
const LABEL_FONT_SIZE_FOCUS = 14;

export default class Input extends Component {
    state = {
        _labelPositionTop: new Animated.Value(LABEL_DEFAULT_TOP),
        _labelFontSize: new Animated.Value(LABEL_FONT_SIZE)
    }

    handleFocus() {

        Animated.timing(this.state._labelPositionTop, {
            toValue: LABEL_DEFAULT_TOP_FOCUS,
            duration: 300,
        }).start();
        Animated.timing(this.state._labelFontSize, {
            toValue: LABEL_FONT_SIZE_FOCUS,
            duration: 300,
        }).start();
    }
    handleTouchFocus() {
        const onSelectSchool =  this.props.onSelectSchool;
        onSelectSchool();
        Animated.timing(this.state._labelPositionTop, {
            toValue: LABEL_DEFAULT_TOP_FOCUS,
            duration: 300,
        }).start();
        Animated.timing(this.state._labelFontSize, {
            toValue: LABEL_FONT_SIZE_FOCUS,
            duration: 300,
        }).start();
    }
    handleBlur() {
        if (!this.props.value) {
            Animated.timing(this.state._labelPositionTop, {
                toValue: LABEL_DEFAULT_TOP,
                duration: 300,
            }).start();
            Animated.timing(this.state._labelFontSize, {
                toValue: LABEL_FONT_SIZE,
                duration: 400,
            }).start();
        }
    }

    renderLabel() {
        const styleLabelContainer = {
            ...styleInput.labelContainer,
            top: this.state._labelPositionTop
        }
        const styleLabel = {
            ...styleInput.label,
            fontSize: this.state._labelFontSize
        }
        return <Animated.View style={styleLabelContainer}>
            <TextFont>
                <Animated.Text style={styleLabel}>
                    {this.props.label}
                </Animated.Text>
            </TextFont>
        </Animated.View>
    }


    renderInputText() {
        return <TextInput
            value={this.props.value}
            style={styleInput.input}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onChangeText={this.props.onChange}
            secureTextEntry={this.props.secureTextEntry}
            underlineColorAndroid='rgba(0,0,0,0)'
        />
    }

    renderText() {
        let content = this.props.value;
        if (content=='-1') {
            content="";
            this.handleBlur()
        }
        return (
            <TouchableOpacity onPress={()=>{this.handleTouchFocus()}}>
                <View style={{height:34,justifyContent:'center',
                    color: '#333333',fontSize: 14}}>
                    <Text>{content}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderLabelInputCombine() {
        const styleInputContainer = [
            styleInput.inputContainer,
            getStyleFromProps(['marginTop'], this.props)
        ];
        return <View style={styleInputContainer}>
            {this.renderLabel()}
            {this.props.inputable ? this.renderText() : this.renderInputText()}
            {this.renderLineWhite()}
        </View>
    }

    renderLineWhite(){
        return <View style={styleInput.lineWhite}></View>
    }

    renderInputWithIcon() {
        return <View style={{
            flexDirection: 'row', marginLeft: 20,
            marginRight: 20, alignItems: 'flex-end'
        }}>
            <View style={{width: 40}}>
                {React.cloneElement(this.props.icon, {
                    color: '#ffffff',
                    size: 25
                })}
            </View>
            <View style={{flex: 1}}>
                {this.renderLabelInputCombine()}
            </View>
        </View>
    }


    render() {
        if (this.props.icon) return this.renderInputWithIcon();
        return this.renderLabelInputCombine();

    }
}

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSelectSchool: PropTypes.func,
    secureTextEntry: PropTypes.bool
}

const styleInput = {
    inputContainer: {
        position: 'relative',
        height: 51,
        justifyContent: 'flex-end'
    },
    labelContainer: {
        position: 'absolute',
        top: 100
    },
    label: {
        color: '#999999',
        fontSize: 14,
        letterSpacing: 0.9
    },
    lineWhite: {
        height: 2,
        backgroundColor: '#999999',
        opacity: .51
    },

    input: {
        height: 34,
        color: '#333333',
        borderWidth: 0,
        borderColor: 'transparent',
        fontSize: 14,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0
    }
};

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onSelectSchool: PropTypes.func,
    onClick: PropTypes.func,
    marginTop: PropTypes.number
}