/**
 * Created by yiwei on 16/3/2.
 * @desc 主题列表模块
 */
'use strict';
import React, {
    Component,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Text
} from 'react-native';

// 引入样式
import commonStyle from '../../style/common';
import themeStyle from './style';

// 引入数据接口
import API from '../../api/api';

// 引入指定主题组件
import specTheme from './spectheme';

class ThemeListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            themeList: []
        };
    }

    handleThemeListData(themeList) {
        this.setState({
            isLoading: false,
            themeList: themeList.others
        });
    }

    componentWillMount() {
        fetch(API.themes.listUrl)
            .then(response => response.json())
            .then(json => this.handleThemeListData(json))
            .catch(error => {

            });
    }

    render() {
        const theme = this.state.themeList.map((_theme, row) => {
            return <Theme data={_theme} navigator={this.props.navigator} key={row}/>;
        });
        var load = (this.state.isLoading) ?
            (<ActivityIndicatorIOS
                hidden='true'
                size='large'
                color='#e78170'
                style={commonStyle.load}/>) :
            (<ScrollView style={commonStyle.scrollview}>
                {theme}
            </ScrollView>);
        return (
            <View style={commonStyle.container}>
                {load}
            </View>
        );
    }
}

// 定义单个主题组件
class Theme extends Component {
    getDetails(id, title, thumbnail) {
        if (id) {
            this.props.navigator.push({
                title: title,
                component: specTheme,
                passProps: {id: id, thumbnail: thumbnail}
            });
        }
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor='#dddddd'
                onPress={this.getDetails.bind(this, this.props.data.id, this.props.data.name, this.props.data.thumbnail)}
                >
                <View>
                    <View style={commonStyle.rowContainer}>
                        <View style={commonStyle.textContainer}>
                            <Image style={commonStyle.thumb} source={{uri: this.props.data.thumbnail}}/>
                            <View style={themeStyle.profilesInfo}>
                                <Text style={themeStyle.name}>{this.props.data.name}</Text>
                                <Text style={themeStyle.description}>{this.props.data.description}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={commonStyle.separator}></View>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = {
    title: '知乎主题',
    component: ThemeListComponent
};