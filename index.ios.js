/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry
} from 'react-native';

/**
 * @desc 引入入口module
 */
import DailyEnter from './src/lib';

/**
 * @desc 注册应用根组件
 */
AppRegistry.registerComponent('daily', () => DailyEnter);
