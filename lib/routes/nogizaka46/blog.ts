import got from '@/utils/got';
import { parseDate } from '@/utils/parse-date';

const rootUrl = 'https://www.nogizaka46.com';

export default async (ctx) => {
    const id = ctx.req.param('id') ?? 'all';
    const params = id === 'all' ? '' : `?ct=${id}`;
    const currentUrl = `${rootUrl}/s/n46/api/list/blog${params}`;

    const response = await got({
        method: 'get',
        url: currentUrl,
    });

    const list = JSON.parse(response.data.slice(4).slice(0, -2)).data;

    ctx.set('data', {
        allowEmpty: true,
        title: '乃木坂46 公式ブログ',
        link: 'https://www.nogizaka46.com/s/n46/diary/MEMBER',
        item:
            list &&
            list.map((item) => ({
                title: item.title,
                link: item.link,
                pubDate: parseDate(item.date),
                author: item.name,
                description: item.text,
                guid: rootUrl + new URL(item.link).pathname,
            })),
    });
};
