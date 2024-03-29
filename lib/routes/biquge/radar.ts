const biquge = {
    _name: '笔趣阁',
    '.': [
        {
            title: '小说',
            docs: 'https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo',
            source: ['/'],
            target: (params, url) => `/biquge/${new URL(url).toString()}`,
        },
    ],
};

export default {
    'xbiquwx.la': biquge,
    'biqu5200.net': biquge,
    'xbiquge.so': biquge,
    'biqugeu.net': biquge,
    'b520.cc': biquge,
    'biquge.biz': biquge,
    'xbiquge.la': biquge,
    'qbiqu.com': biquge,
    'bswtan.com': biquge,
    'biquge.co': biquge,
    'zhhbqg.com': biquge,
    'biqugse.com': biquge,
    'ibiquge.net': biquge,
    'shuquge.com': biquge,
    'mayiwxw.com': biquge,
};
