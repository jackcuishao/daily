/**
 * Created by yiwei on 16/3/2.
 * @desc theme模块
 */
'use strict';
import React, {
    Component,
    NavigatorIOS
} from 'react-native';

// 引入主题列表组件
import ThemeListComponent from './themelist';

// 引入全局样式
import styles from '../../style/common';

class theme extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigatorIOS
                style={styles.flexOne}
                initialRoute={{
                    title: ThemeListComponent.title,
                    component: ThemeListComponent.component
                }}
                />
        );
    }
}

module.exports = theme;