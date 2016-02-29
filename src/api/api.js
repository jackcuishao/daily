/**
 * Created by yiwei on 16/2/29.
 * @desc 定义数据接口
 */
module.exports = {
    news: {
        listUrl: 'http://news-at.zhihu.com/api/4/news/latest', //拉取最新日报
        newInfo: {
            content: 'http://news-at.zhihu.com/api/4/news/', // 获取某一篇日报详细内容
            extraInfo: 'http://news-at.zhihu.com/api/4/story-extra/' //获取某一篇日报额外信息 {评论数、点赞数等}
        },
        comment: {
            longComments: { // 查看长评论 最终接口形式: baseUrl + #{id} + path
                baseUrl: 'http://news-at.zhihu.com/api/4/story/',
                path: '/long-comments'
            },
            shortComments: {
                baseUrl: 'http://news-at.zhihu.com/api/4/story/',
                path: '/short-comments'
            }
        }
    },
    themes: {
        listUrl: 'http://news-at.zhihu.com/api/4/themes', //主题日报列表
        themeInfo: 'http://news-at.zhihu.com/api/4/theme/' //主题日报内容
    },
    hot: {
        listUrl: 'http://news-at.zhihu.com/api/3/news/hot' //热门消息
    }
};