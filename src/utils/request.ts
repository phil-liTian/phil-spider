/*
 * @author: phil.li
 */
let http = require('http');
// import queryString from 'query-string';
const queryString = require('query-string');

class Request {
	static PromiseData(options) {
    return new Promise((resolve, reject) => {
      let body = ''
      let reqBody = http.request(options, res => {
        res.on('data', chunk => {
          body += chunk
        })
        res.on('end', () => {
          resolve(body)
        })
        res.on('error', err => {
          reject(err)
        })
      })
      reqBody.end()
    })
  }

	static httpGet(config) {
		const header = config.header || {};
		let options = {
			host: config.host,
			port: 80,
			path: config.path + queryString.stringify(config.data),
			method: 'GET',
			encoding: null,
			headers: {
				// 'Content-Type': 'application/json',
				'User-Agent':
					'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
			},
		};
		options.headers = Object.assign({}, options.headers, header);

		if (config.https) {
			// http = require('https');
			options.port = 443;
		}

		return this.PromiseData(options);
	}
}

// export default Request;
module.exports = Request;