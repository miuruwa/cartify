const express = require('express')
const serveStatic = require('serve-static')

const app = express()
const resolve = require('path').resolve

app.use(
    serveStatic(
        resolve('./build')
    )
)
app.get(
    '/cartify', 
    (_req, res) => res.sendFile(resolve('./build/cartify/.html'))
)
app.get(
    '/cartify/settings', 
    (_req, res) => res.sendFile(resolve('./build/cartify/settings.html'))
)

app.listen(
    3000, 
    () => console.log('Started on PORT 3000')
)