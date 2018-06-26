'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl } = this.config.baseUrl;

    console.log('baseUrl', serverUrl);
    // use build-in http client to GET hacker-news api
    const {data} = await this.ctx.curl(`${serverUrl}/api/getMenuList`, {
      // data: {
      //   orderBy: '"$key"',
      //   startAt: `"${pageSize * (page - 1)}"`,
      //   endAt: `"${pageSize * page - 1}"`,
      // },
      dataType: 'json',
    });
    console.log('baseUrl data', data);
    return data;
    // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );
    // return newsList.map(res => res.data);
  }
}

module.exports = NewsService;
