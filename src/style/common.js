/**
 * Created by yiwei on 16/2/29.
 * @desc 定义公共style
 */
'use strict';
import React, {
    StyleSheet
} from 'react-native';

var commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    flexOne: {
        flex: 1
    },
    load: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview: {
        flex: 1
    },
    separator: {
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#dddddd'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10
    }
});

module.exports = commonStyles;