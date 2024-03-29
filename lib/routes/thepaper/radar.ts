export default {
    'thepaper.cn': {
        _name: '澎湃新闻',
        '.': [
            {
                title: '首页头条',
                docs: 'https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-shou-ye-tou-tiao',
                source: ['/'],
                target: '/thepaper/featured',
            },
            {
                title: '侧边栏',
                docs: 'https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-ce-bian-lan',
                source: ['/'],
                target: '/thepaper/sidebar',
            },
            {
                title: '频道',
                docs: 'https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-pin-dao',
                source: ['/'],
                target: (params, url) => `/thepaper/channel/${url.match(/channel_(\d+)/)?.[1]}`,
            },
            {
                title: '栏目',
                docs: 'https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-lie-biao',
                source: ['/'],
                target: (params, url) => `/thepaper/list/${url.search(/list_(\d+)/)?.[1]}`,
            },
            {
                title: '澎湃美数组作品集',
                docs: 'https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-peng-pai-mei-shu-zuo-pin-ji',
                source: ['/'],
                target: '/thepaper/839studio/:id',
            },
        ],
    },
    'factpaper.cn': {
        _name: '澎湃新闻',
        '.': [
            {
                title: '明查',
                docs: 'https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-ming-cha',
                source: ['/'],
                target: '/thepaper/factpaper/:status',
            },
        ],
    },
};
