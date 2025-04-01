/*
 * @author: phil.li
 */
const resAPI = (req, res, next) => {
  res.API = (data, msg) => {
    let json = {
      msg,
      data,
      code: 200,
    }
    res.json(json)
  }

  res.API_ERROR = (msg, code, data = null) => {
    let json = {
      msg,
      data,
      code
    }

    res.json(json)
  }

  next()
}

export default resAPI
