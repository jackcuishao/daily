/**
 * Created by yiwei on 16/3/1.
 * @desc 查看日报内容
 */
'use strict';
import React, {
    Component,
    Image,
    View,
    Text,
    WebView,
    ActivityIndicatorIOS
} from 'react-native';

// 引入样式
import newStyle from './style';
import commonStyle from '../../style/common';

// 引入数据接口
import API from '../../api/api';

class DetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            details: {}
        };
    }

    // 处理请求的数据
    handleData(details) {
        this.setState({
            details: details,
            isLoading: false
        });
    }

    componentWillMount() {
        fetch(API.news.newInfo.content + this.props.id)
            .then(response => response.json())
            .then(json => this.handleData(json))
            .catch(error => {

            });
    }

    render() {
        var load = (this.state.isLoading) ?
            (<ActivityIndicatorIOS
                hidden='true'
                size='large'
                color='#e78170'
                style={commonStyle.load}/>) :
            (<Detail data={this.state.details}/>);
        return (
            <View style={commonStyle.container}>
                {load}
            </View>
        );
    }
}

class Detail extends Component {
    render() {
       return (
           <WebView
               source={{uri: this.props.data.share_url}}
               />
       );
    }
}

module.exports = DetailComponent;
