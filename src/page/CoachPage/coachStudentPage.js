/**
 * Created by Administrator on 2017/7/24.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    View,
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
    render() {
        return (
            <SwipeListView
                dataSource={this.state.dataSource}
                renderRow={ data => (
                    <TouchableHighlight
                        onPress={ _ => console.log('You touched me') }
                        style={styles.rowFront}
                        underlayColor={'#AAA'}
                    >
                        <View>
                            <Text>I am {data} in a SwipeListView</Text>
                        </View>
                    </TouchableHighlight>
                )}
                renderHiddenRow={ (data, secId, rowId, rowMap) => (
                    <View style={styles.rowBack}>
                        <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                            <Text style={styles.backTextWhite}>Right</Text>
                        </View>
                        <View style={[styles.backRightBtn, styles.backRightBtnCenter]}>
                            <Text style={styles.backTextWhite}>Right</Text>
                        </View>
                        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={()=>{} }>
                            <Text style={styles.backTextWhite}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={0}
                rightOpenValue={-225}
            />
        )
    }
}
const styles = StyleSheet.create({
    backTextWhite: {
        color: '#FFF'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 0,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 150
    },
    backRightBtnCenter: {
        backgroundColor: 'yellow',
        right: 75
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0
    },
});

export const Student = TabNavigator({
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
    //小黑屋
    studyfool:{
        screen:Studying,
        navigationOptions:{
            tabBarLabel: '小黑屋',
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
    tabBarOptions:{
        activeBackgroundColor:'#ff0000',
        inactiveBackgroundColor:'#D6D6D6',
        labelStyle: {
            fontSize: 14,
            color:'#333333'
        },
        tabStyle: {
            height: 45,
            backgroundColor: '#D6D6D6',
            justifyContent:'center',
            alignContent:'center',
        },
        style: {
            backgroundColor: '#D6D6D6',
        },
    },
    swipeEnabled:false,
})