const http = require('http')

const requestListner = (req, res) => {
    res.end('Hello World')
}

const server = http.createServer()
server.on('request', requestListner)

server.listen(4242, () => {
    console.log('Server started')
})