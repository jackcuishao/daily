/**
 * Created by yiwei on 16/3/2.
 * @desc hot模块
 */
'use strict';
import React, {
    Component,
    NavigatorIOS
} from 'react-native';

// 引入主题列表组件
import HotListComponent from './hotlist';

// 引入全局样式
import styles from '../../style/common';

class hot extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigatorIOS
                style={styles.flexOne}
                initialRoute={{
                    title: HotListComponent.title,
                    component: HotListComponent.component
                }}
                />
        );
    }
}

module.exports = hot;