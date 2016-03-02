/**
 * Created by yiwei on 16/2/29.
 */
'use strict';
import React, {
    Component,
    TabBarIOS,
    Text
} from 'react-native';

// 引入style
import commonStyles from '../style/common';

//引入news theme hot三个模块
import News from './news';
import Theme from './themes';
import Hot from './hot';

class DailyEnter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'news_tab'
        };
    }

    /**
     * @desc 切换tab相应方法
     * @param selectedTab
     */
    _selectTab(selectedTab: string) {
        this.setState({selectedTab});
    }

    render() {
        return (
            <TabBarIOS barTintColor='#e78170' tintColor='#fff'>
                <TabBarIOS.Item
                    title="日报"
                    icon={require('../img/news.png')}
                    selected={this.state.selectedTab == 'news_tab'}
                    onPress={this._selectTab.bind(this, 'news_tab')}
                    >
                    <News />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="主题"
                    icon={require('../img/theme.png')}
                    selected={this.state.selectedTab == 'themes_tab'}
                    onPress={this._selectTab.bind(this, 'themes_tab')}
                    >
                    <Theme />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="热门"
                    icon={require('../img/hot.png')}
                    selected={this.state.selectedTab == 'hot_tab'}
                    onPress={this._selectTab.bind(this, 'hot_tab')}
                    >
                    <Hot />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

module.exports = DailyEnter;

