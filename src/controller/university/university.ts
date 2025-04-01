/*
 * @author: phil.li
 */

import universityQuery from '../../models/university/university'
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  return universityQuery(req, res);
})

export default app