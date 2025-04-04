/*
 * @author: phil.li
 */
import express from 'express'
import path from 'path'
import swaggerUI from './utils/swaggerUI'
import arrRoutes from './routers'
import resAPI from './middlewares/resAPI'
const app = express()

require('dotenv').config({
	override: true,
	path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs').engine('html', require('ejs').__express)
swaggerUI(app)

// 接口返回封装
app.use(resAPI)

for (const route of arrRoutes) {
  app.use(route.path, require(route.component).default)
}
// app.use(router)

app.listen(3000, () => {
  console.log('server start at http://localhost:3000')
})
