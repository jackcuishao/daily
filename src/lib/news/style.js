/**
 * Created by yiwei on 16/2/29.
 * @desc 日报列表相关的样式
 */
'use strict';
import React, {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    scrollview: {
        flex: 1
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    separator: {
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#dddddd'
    },
    title: {
        fontSize: 15,
        color: '#000'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    profilesInfo: {
        flex: 5
    },
    info: {
        flex: 1
    },
    posterData: {
        marginTop: 25
    },
    date: {
        fontSize: 13,
        color: '#656565'
    }
});

module.exports = styles;
