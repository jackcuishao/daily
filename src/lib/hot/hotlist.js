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
import hotStyle from './style';

// 引入数据接口
import API from '../../api/api';

// 引入detail组件
import DetailComponent from '../news/detail';

class HotListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hotList: []
        };
    }

    handleHotListData(hotList) {
        this.setState({
            isLoading: false,
            hotList: hotList.recent
        });
    }

    componentWillMount() {
        fetch(API.hot.listUrl)
            .then(response => response.json())
            .then(json => this.handleHotListData(json))
            .catch(error => {

            });
    }

    render() {
        const hot = this.state.hotList.map((_hot, row) => {
            return <Hot data={_hot} navigator={this.props.navigator} key={row}/>;
        });
        var load = (this.state.isLoading) ?
            (<ActivityIndicatorIOS
                hidden='true'
                size='large'
                color='#e78170'
                style={commonStyle.load}/>) :
            (<ScrollView style={commonStyle.scrollview}>
                {hot}
            </ScrollView>);
        return (
            <View style={commonStyle.container}>
                {load}
            </View>
        );
    }
}

// 定义单个主题组件
class Hot extends Component {
    getDetails(title, id) {
        if (id) {
            this.props.navigator.push({
                title: title,
                component: DetailComponent,
                passProps: {id: id}
            });
        }
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor='#dddddd'
                onPress={this.getDetails.bind(this, this.props.data.title, this.props.data.news_id)}
                >
                <View>
                    <View style={commonStyle.rowContainer}>
                        <View style={commonStyle.textContainer}>
                            <Image style={commonStyle.thumb} source={{uri: this.props.data.thumbnail}}/>
                            <View style={hotStyle.profilesInfo}>
                                <Text style={hotStyle.name}>{this.props.data.title}</Text>
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
    title: '热门',
    component: HotListComponent
};