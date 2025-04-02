/*
 * @author: phil.li
 */
const express = require('express');
const request = require('../../utils/request')
const app = express()


function getUserInfo(req, res) {
  let host = 'api.weixin.qq.com';
  let path = '/sns/jscode2session';
  let data = {
		appid: process.env.appid,
		secret: process.env.secret,
		grant_type: 'authorization_code', // 授权（必填）默认值
		js_code: req.query.code, // 小程序端调用wx.login返回的code
	};

  request.httpGet({ host, path, data, https: true }).then(body => {
    console.log('res', body);
    res.API({ data: body });
  }).catch(err => {
    console.log('err', err);
  })

  // return res.API({ data: 123 })
}

app.get('/', (req, res) => {
  getUserInfo(req, res);
})

export default app

