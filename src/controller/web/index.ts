/*
 * @author: phil.li
 */
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index.html', { title: 'Hello World' })
})

export default app
