/**
 * Created by yiwei on 16/3/1.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    ScrollView,
    RefreshControl,
    TouchableHighlight,
    Image,
    ActivityIndicatorIOS
} from 'react-native';

// 引入detail组件
import DetailComponent from './detail';

// 引入样式
import commonStyle from '../../style/common';
import newStyle from './style';

// 引入数据接口
import API from '../../api/api';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            date: '',
            isLoading: true,
            isRefreshing: false
        };
    }

    // 处理日报列表数据
    handleNewListData(newsList) {
        // 处理时间格式
        var _date = new Date(Date(newsList.date));
        this.setState({
            newsList: newsList.stories,
            date: _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + (_date.getDay()-1),
            isLoading: false,
            isRefreshing: false
        });
        console.log(this.state);
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        this.setState({
            isRefreshing: true
        });
        fetch(API.news.listUrl)
            .then(response => response.json())
            .then(json => this.handleNewListData(json))
            .catch(error => {

            });
    }

    render() {
        const news = this.state.newsList.map((_new, row) => {
            return <NewLine data={_new} key={row} date={this.state.date} navigator={this.props.navigator}/>
        });
        var load = (this.state.isLoading) ?
            (<ActivityIndicatorIOS
                hidden='true'
                size='large'
                color='#e78170'
                style={commonStyle.load}/>) :
            (<ScrollView
                style={commonStyle.scrollview}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.getData.bind(this)}
                        tintColor='#e78170'
                        title='正在刷新...'
                        />
                }>
                {news}
            </ScrollView>);
        return (
            <View style={commonStyle.container}>
                {load}
            </View>
        );
    }
}

// NewLine组件：每一行展示
class NewLine extends Component {
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
        return (
            <TouchableHighlight
                underlayColor='#dddddd'
                onPress={this.getDetails.bind(this, this.props.data.id, this.props.data.title)}
                >
                <View>
                    <View style={commonStyle.rowContainer}>
                        <View style={commonStyle.textContainer}>
                            <Image style={commonStyle.thumb} source={{uri: this.props.data.images[0]}} />
                            <View style={newStyle.profilesInfo}>
                                <View style={newStyle.info}>
                                    <Text style={newStyle.title}>{this.props.data.title}</Text>
                                </View>
                                <View style={[newStyle.info, newStyle.posterData]}>
                                    <Text style={newStyle.date}>发表时间：{this.props.date}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={commonStyle.separator}/>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = {
    title: '知乎日报',
    component: ListComponent
};