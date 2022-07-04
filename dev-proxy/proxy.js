const fs = require('fs')
const https = require('https')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

function proxyTo (port, ws = false) {
  return createProxyMiddleware({
    target: `http://localhost:${port}`, 
    changeOrigin: true, 
  })
}

const app = express()

app.use('/', proxyTo('3000'))


const options = {
  api: {
    externalResolver: true,
    bodyParser: false,
},
// uses a self signed certificate for the domain
  key: fs.readFileSync('./certs/mycert.com-key.pem'),
  cert: fs.readFileSync('./certs/my-cert.com.pem')
}

https.createServer(options, app).listen(443, '127.0.0.1')
