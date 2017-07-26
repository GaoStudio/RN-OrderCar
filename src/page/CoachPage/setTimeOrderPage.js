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
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
import Picker from 'react-native-picker';
export default class SetTimeOrderPage extends Component {
    constructor(props){
        super(props);
        this.date = [];
        var myDate = new Date();
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

    _showDatePicker() {
        var myDate = new Date();
        let y = myDate.getFullYear()-2017;
        let m = myDate.getMonth();
        let d = myDate.getDay();
        Picker.init({
            pickerData: this.date,
            pickerFontColor: [255, 0 ,0, 1],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnColor:[211,58,49,1],
            pickerCancelBtnColor:[211,58,49,1],
            pickerFontSize:20,
            selectedValue: [y,m,d],
            pickerTitleText:'开始时间',
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    render(){
        return(
        <View>
            <View style={{height:50,backgroundColor:'#dedede',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <Text onPress={()=>{this._showDatePicker()}} style={{fontWeight:'bold',fontSize:18}}>2017-07-26</Text>
                </View>
                <Image style={{width:30,height:30}} source={require('./../../../res/images/fromto.png')}></Image>
                <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>2017-07-28</Text>
                </View>
                <View style={{height:'70%',width:2,backgroundColor:"#666"}}></View>
                <Image style={{marginLeft:10,marginRight:10,width:30,height:30}} source={require('./../../../res/images/date.png')}></Image>
            </View>
        </View>
        )
    }
}