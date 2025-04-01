/*
 * @author: phil.li
 */

const express = require('express');
const app = express();
import poetryQuery from "../models/poetry/tang300";

app.get('/', (req, res) => {
  if ( !req.query.contents ) {
    return res.API_ERROR({
      msg: 'contents is required'
    }, 300)
  }
  return poetryQuery(req, res); 
});

export default app
