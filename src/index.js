/**
 * Created by Administrator on 2017/7/14.
 */
import React, {
    Component
} from 'react';
import {
    StatusBar,
    Text,
    View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Main} from './router.js'
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    static renderContain(route, nav) {
        return (
            <Router nav={nav}  {...route} />
        )
    }
    componentDidMount() {
        setTimeout((function () {
            SplashScreen.hide();
        }),1000)
    }
    render() {
        return (
           <Main></Main>
        );
    }
}