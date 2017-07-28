/**
 * Created by Administrator on 2017/7/25.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    View,
    Animated,
    TouchableOpacity,
    TextInput,
    Easing,
    ScrollView,
    Image,
} from 'react-native';
import Picker from 'react-native-picker';
import Switch from './../../compontent/Switch.js'
import {ScreenHeight} from './../../utils/ScreenUtils.js'
import { Calendar } from 'react-native-calendars';
/*
LocaleConfig.locales['fr'] = {
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNames: ['周日','周一','周二','周三','周四','周五','周六'],
    dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六']
};
LocaleConfig.defaultLocale = 'fr';*/
var myDate = new Date();
export default class SetTimeOrderPage extends Component {
    constructor(props){
        super(props);
        this.date = [];

        this.state = {
             showCalendar:false,
             //formPositionTop: -360,
            trueSwitchIsOn: true,
             formPositionTop: new Animated.Value(-600),
            startDate:{
                 Y:myDate.getFullYear(),
                M:myDate.getMonth()+1,
                D:myDate.getDate(),
            },
            endDate:{
                Y:myDate.getFullYear(),
                M:myDate.getMonth()+1,
                D:myDate.getDate(),
            }
        }
        for(let i=myDate.getFullYear();i<2025;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            this.date.push(_date);
        }
    }
    _showDatePicker(StartOrEnd) {
        let y,m,d,title
        if(StartOrEnd){
            y = this.state.startDate.Y;
            m = this.state.startDate.M;
            d = this.state.startDate.D;
            title = '开始时间'
        }else {
            y = this.state.endDate.Y;
            m = this.state.endDate.M;
            d = this.state.endDate.D;
            title = '结束时间'
        }
        Picker.init({
            pickerData: this.date,
            pickerFontColor: [255, 0 ,0, 1],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnColor:[211,58,49,1],
            pickerCancelBtnColor:[211,58,49,1],
            pickerFontSize:20,
            selectedValue: [y+'年',m+'月',d+'日'],
            pickerTitleText:title,
            onPickerConfirm: (pickedValue, pickedIndex) => {
                if(StartOrEnd){
                    if(pickedIndex[0]==0) {
                        if ((pickedIndex[1]) < myDate.getMonth()) {
                            alert('所选时间不可小于当前时间');
                            return
                        } else if ((pickedIndex[1]) == myDate.getMonth()) {
                            if ((pickedIndex[2] + 1) < myDate.getDate()) {
                                alert('所选时间不可小于当前时间');
                                return
                            }

                        }
                    }
                    this.setState({
                        startDate:{
                            Y:myDate.getFullYear()+pickedIndex[0],
                            M:pickedIndex[1]+1,
                            D:pickedIndex[2]+1,
                        },
                    })
                }else {
                    if(pickedIndex[0]<(this.state.startDate.Y-myDate.getFullYear())){
                        alert('结束时间不可小于开始时间');
                        return
                    }else if(pickedIndex[0]==(this.state.startDate.Y-myDate.getFullYear())){
                        if((pickedIndex[1]+1)<(this.state.startDate.M)){
                            alert('结束时间不可小于开始时间');
                            return
                        }else if((pickedIndex[1]+1)==(this.state.startDate.M)){
                            if((pickedIndex[2]+1)<this.state.startDate.D){
                                alert('结束时间不可小于开始时间');
                                return
                            }
                        }
                    }

                    this.setState({
                        endDate:{
                            Y:myDate.getFullYear()+pickedIndex[0],
                            M:pickedIndex[1]+1,
                            D:pickedIndex[2]+1,
                        },
                    })
                }
            },
        });
        Picker.show();
    }
    startCalendar(){
        Animated.timing(this.state.formPositionTop, {
            toValue: 0,
            duration: 300,
            easing: Easing.spring,
        }).start();
    }
    closeCalendar(){
        Animated.timing(this.state.formPositionTop, {
            toValue: -360,
            duration: 300,
            easing: Easing.spring,
        }).start(event => {
            if (event.finished) {
                this.setState({showCalendar:false})
            }
        });
    }
    toogleCalendar(){
        if(this.state.showCalendar){
            this.closeCalendar();
        }else {
            this.setState({showCalendar:true})
        }
    }
    componentDidUpdate(){
        if(this.state.showCalendar){
            this.startCalendar();
        }
    }
    renderCalendar(){
        let minTime=this.state.startDate.Y+'-';
        if(this.state.startDate.M<10){
            minTime=minTime+'0';
        }
        minTime= minTime+this.state.startDate.M+'-';
        if(this.state.startDate.D<10){
            minTime=minTime+'0';
        }
        minTime= minTime+this.state.startDate.D;
        let maxTime=this.state.endDate.Y+'-';
        if(this.state.endDate.M<10){
            maxTime=maxTime+'0';
        }
        maxTime= maxTime+this.state.endDate.M+'-';
        if(this.state.endDate.D<10){
            maxTime=maxTime+'0';
        }
        maxTime= maxTime+this.state.endDate.D;
        return(
            <View style={{position:'absolute',top:50,height:ScreenHeight-120,width:'100%',backgroundColor:'#ffffff88'}}>
                <Animated.View style={{position:'absolute',top:this.state.formPositionTop,width:'100%',height:'100%'}}>
                    <View style={{width:'100%',height:600}}>
                        <Calendar
                            current={myDate}
                            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                            minDate={minTime}
                            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                            maxDate={maxTime}
                            // Handler which gets executed on day press. Default = undefined
                            onDayPress={(day) => {console.log('selected day', day)}}
                            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                            monthFormat={'yyyy/MM'}
                            // Handler which gets executed when visible month changes in calendar. Default = undefined
                            onMonthChange={(month) => {console.log('month changed', month)}}
                            theme={{
                                calendarBackground: '#ffffff00',
                            }}
                            // Hide month navigation arrows. Default = false
                            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        />
                    </View>
                    <TouchableOpacity onPress={()=>{ this.closeCalendar()}} style={{flex:1,backgroundColor:'#ff0'}} >
                         <View ></View>
                    </TouchableOpacity>
                </Animated.View>

            </View>
        )
    }
    render(){

        return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{height:50,backgroundColor:'#dedede',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{flex:1,alignItems:'center'}} onPress={()=>{this._showDatePicker(true)}} >
                    <View >
                        <Text  style={{fontWeight:'bold',fontSize:18}}>{ this.state.startDate.Y}-{this.state.startDate.M}-{this.state.startDate.D}</Text>
                    </View>
                </TouchableOpacity>
                <Image style={{width:30,height:30}} source={require('./../../../res/images/fromto.png')}></Image>
                <TouchableOpacity  style={{flex:1,alignItems:'center'}} onPress={()=>{this._showDatePicker(false)}}  >
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18}}>{ this.state.endDate.Y}-{this.state.endDate.M}-{this.state.endDate.D}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{height:'70%',width:2,backgroundColor:"#666"}}></View>
                <TouchableOpacity onPress={()=>{ this.toogleCalendar()}} >
                    <Image style={{marginLeft:10,marginRight:10,width:30,height:30}} source={require('./../../../res/images/date.png')}></Image>
                </TouchableOpacity>
            </View>
            <View>
                <Switch height={15} width={30}></Switch>
            </View>
            {this.state.showCalendar&&this.renderCalendar()}
        </View>
        )
    }
}