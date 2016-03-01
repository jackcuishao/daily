/**
 * Created by yiwei on 16/2/29.
 * @desc news模块
 */
'use strict';
import React, {
    Component,
    ScrollView,
    RefreshControl,
    View,
    Text,
    Image,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native';

// 引入列表组件
import ListComponent from './list';

// 引入全局样式
import styles from '../../style/common'

class news extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigatorIOS
                style={styles.flexOne}
                initialRoute={{
                    title: ListComponent.title,
                    component: ListComponent.component
                }}/>
        );
    }
}

module.exports = news;