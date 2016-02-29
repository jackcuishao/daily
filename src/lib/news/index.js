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
    TouchableHighlight
} from 'react-native';

// 引入样式
import newsStyle from './style';
import commonStyles from '../../style/common';

class news extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={commonStyles.container}>
                <ScrollView>

                </ScrollView>
            </View>
        );
    }
}

/**
 * @desc 定义每一条日报显示组件
 */
class List extends Component {
    render() {
        return (
            <TouchableHighlight underlayColor='#dddddd'>
                <View>

                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = news;