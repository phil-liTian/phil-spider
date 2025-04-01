/*
 * @author: phil.li
 */
import expressJsdocSwagger from 'express-jsdoc-swagger'

const options = {
	info: {
		version: '1.0.0',
		title: 'phil-spider',
		description: '基于node + express爬虫',
	},
	security: {
		BasicAuth: {
			type: 'http',
			scheme: 'basic',
		},
	},
	baseDir: __dirname,
	filesPattern: ['../controller/**/*.ts'], // Glob pattern to find your jsdoc files
	swaggerUIPath: '/api-docs', // SwaggerUI will be render in this url. Default: '/api-docs'
};

export default app => {
  expressJsdocSwagger(app)(options);
}