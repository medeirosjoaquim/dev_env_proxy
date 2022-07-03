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

// app.use('/app*', proxyTo('10100'))
// app.use('/signup*', proxyTo('10700', true))
// app.use('/extension/leadiq-background.js', proxyTo('10600'))
// app.use('/health', (req, res) => res.send('version 1.0.0'))
// app.use('/', redirects)
app.use('/', proxyTo('3000'))


const options = {
  api: {
    externalResolver: true,
    bodyParser: false,
},
  key: fs.readFileSync('./certs/dev.johnboxcodes.com-key.pem'),
  cert: fs.readFileSync('./certs/dev.johnboxcodes.com.pem')
}

https.createServer(options, app).listen(443, '127.0.0.1')
