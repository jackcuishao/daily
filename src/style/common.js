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
    }
});

module.exports = commonStyles;