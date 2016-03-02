/**
 * Created by yiwei on 16/3/2.
 * @desc 指定主题模块
 */
'use strict';
import React, {
    Component,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Text,
    Alert
} from 'react-native';

// 引入样式
import commonStyle from '../../style/common';
import themeStyle from './style';

// 引入数据接口
import API from '../../api/api';

// 引入detail组件
import DetailComponent from '../news/detail';

class specTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            themeList: [],
            bg: ''
        };
    }

    handleData(themeList) {
        this.setState({
            isLoading: false,
            themeList: themeList.stories,
            bg: themeList.image
        });
    }

    componentWillMount() {
        fetch(API.themes.themeInfo + this.props.id)
            .then(response => response.json())
            .then(json => this.handleData(json))
            .catch(error => {

            });
    }

    render() {
        const theme = this.state.themeList.map((_theme, row) => {
            return <Line data={_theme} navigator={this.props.navigator} key={row} thumbnail={this.props.thumbnail}/>;
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
                <Image style={themeStyle.banner} source={{uri: this.state.bg}}></Image>
                {load}
            </View>
        );
    }
}

class Line extends Component {
    getDetails(id, title) {
        if (id) {
            this.props.navigator.push({
                title: title,
                component: DetailComponent,
                passProps: {id: id}
            });
        }
    }

    render() {
        var uri = (this.props.data.images) ? this.props.data.images[0] : this.props.thumbnail;
        return (
            <TouchableHighlight
                underlayColor='#dddddd'
                onPress={this.getDetails.bind(this, this.props.data.id, this.props.data.title)}
                >
                <View>
                    <View style={commonStyle.rowContainer}>
                        <View style={commonStyle.textContainer}>
                            <Image style={commonStyle.thumb} source={{uri: uri}}/>
                            <View style={themeStyle.profilesInfo}>
                                <Text style={themeStyle.name}>{this.props.data.title}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={commonStyle.separator}></View>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = specTheme;