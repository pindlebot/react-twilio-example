require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Bundler = require('parcel-bundler')
const PORT = Number(process.env.PORT || 1234)

let bundler = new Bundler('src/index.html')
let app = express()

app.use(bodyParser.json())

app.post('/api/send', (req, res) => {
  let SID = process.env.TWILIO_SID;
  let TOKEN = process.env.TWILIO_TOKEN;
  let SENDER = process.env.TWILIO_SENDER

  if(!SID || !TOKEN) {
    return res.json({message: 'add TWILIO_SID and TWILIO_TOKEN to .env file.'})
  }

  let client = require('twilio')(SID, TOKEN)

  client.sendMessage({
    to: req.body.recipient,
    from: SENDER,
    body: 'word to your mother.'
  }, (err, responseData) => {
    if (!err) {
      res.json({
        From: responseData.from, 
        Body: responseData.body
      })
    }
  })
})

app.use(bundler.middleware())

app.listen(PORT)