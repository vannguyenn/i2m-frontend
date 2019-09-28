const express = require('express')
const next = require('next')
const proxyMiddleware = require('http-proxy-middleware')

function localProxy(service, port) {
  const path = `/api/${service}`

  return {
    [path]: {
      target: `http://localhost:${port}/`,
      pathRewrite: {
        [`^${path}`]: '',
      },
      changeOrigin: true,
    },
  }
}

const PROXIES = {
  '/api': {
    target: process.env.NEXT_APP_PROXY || `http://localhost:8080`,
    changeOrigin: true,
  },
}

const PORT = parseInt(process.env.NEXT_APP_PORT, 10) || 3000
const ENV = process.env.NODE_ENV || 'development'
const dev = ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    Object.entries(PROXIES).forEach(([path, config]) => {
      server.use(proxyMiddleware(path, config))
    })

    server.all('*', (req, res) => handle(req, res))

    server.listen(PORT, err => {
      if (err) {
        throw err
      }

      console.log(`> Ready on port ${PORT} [${ENV}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server', err)
  })
