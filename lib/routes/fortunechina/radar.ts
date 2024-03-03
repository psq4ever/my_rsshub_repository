export default {
    'fortunechina.com': {
        _name: '财富中文网',
        '.': [
            {
                title: '分类',
                docs: 'https://docs.rsshub.app/routes/new-media#cai-fu-zhong-wen-wang-fen-lei',
                source: ['/:category', '/'],
                target: '/fortunechina/:category?',
            },
        ],
    },
};
