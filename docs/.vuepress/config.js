
const moment = require('moment');

module.exports = {
    title: 'fly ui 文档',
    description: 'fly ui 最新官方文档',
    base: '/fly-ui/',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        lastUpdated: '上次更新',
        subSidebar: 'auto',
        // logo: 'https://vuejs.org/images/logo.png',
        logo: '/img/fly.svg',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'flyfox JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/z-ti/fly-ui' },
                    { text: '掘金', link: 'https://juejin.cn/user/3544481219226685/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" },
                { title: "测试", path: "/handbook/Test" }
              ],
            }
        ]
    },
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              // 不要忘了安装 moment
              const moment = require('moment')
              moment.locale(lang)
              return moment(timestamp).fromNow()
            }
          }
        ]
    ]
}