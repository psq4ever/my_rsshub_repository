export default {
    'gamersecret.com': {
        _name: 'Gamer Secret',
        '.': [
            {
                title: '最新資訊',
                docs: 'https://docs.rsshub.app/routes/game#gamer-secret-zui-xin-zi-xun',
                source: ['/:type', '/:type/:category', '/'],
                target: '/gamersecret',
            },
            {
                title: '分類',
                docs: 'https://docs.rsshub.app/routes/game#gamer-secret-fen-lei',
                source: ['/:type', '/:type/:category', '/'],
                target: '/gamersecret/:type?/:category?',
            },
            {
                title: 'Latest News',
                docs: 'https://docs.rsshub.app/routes/game#gamer-secret-latest-news',
                source: ['/:type', '/:type/:category', '/'],
                target: '/gamersecret',
            },
            {
                title: 'Category',
                docs: 'https://docs.rsshub.app/routes/game#gamer-secret-category',
                source: ['/:type', '/:type/:category', '/'],
                target: '/gamersecret/:type?/:category?',
            },
        ],
    },
};
