/**
 * Created by Administrator on 2017/7/14.
 */
import React, {
    Component
} from 'react';
import {
    Text,
    Button,
    View,
    Image,
    FlatList
} from 'react-native';
import CategoryHeader from './../../compontent/categoryHeader.js'
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    _renderItem(item){
        return(
            <View>
                <Image style={{width:80,height:100}} resizeMode={Image.resizeMode.center} source={require("../../../res/images/logo.jpg")}></Image>
                <View>
                    <Text>{item}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                <CategoryHeader type="home" title='主页' nav={this.props.navigation}/>
                <FlatList
                    data={['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b']}
                    renderItem={({item}) => this._renderItem(item)}
                />
            </View>
        );
    }
}