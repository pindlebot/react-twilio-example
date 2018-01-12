const proxy = require('http-proxy-middleware')
const Bundler = require('parcel-bundler')
const express = require('express')
const { fork } = require('child_process')

fork('./server')

let bundler = new Bundler('src/index.html')
let app = express()

app.use(
  '/api',
  proxy({
    target: 'http://localhost:3000'
  })
)

app.use(bundler.middleware())

const PORT = Number(process.env.PORT || 1234)

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)  
})
