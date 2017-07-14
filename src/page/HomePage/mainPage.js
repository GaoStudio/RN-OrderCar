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
    FlatList
} from 'react-native';
import CategoryHeader from './../../compontent/categoryHeader.js'
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <View>
                <CategoryHeader type="home" title='主页' nav={this.props.navigation}/>
                <FlatList
                    data={['a', 'b']}
                    renderItem={({item}) => <Text>{item}</Text>}
                />
            </View>
        );
    }
}