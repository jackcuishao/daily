/**
 * Created by yiwei on 16/3/2.
 * @desc 主题模块样式
 */
'use strict';
import React, {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    profilesInfo: {
        flex: 5
    },
    name: {
        fontSize: 18,
        color: '#000'
    },
    description: {
        fontSize: 13,
        color: '#656565',
        marginTop: 25
    },
    banner: {
        height: 200
    }
});

module.exports = styles;