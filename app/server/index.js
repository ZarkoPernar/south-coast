var express = require('express')

var app = express()
var bodyParser = require('body-parser')

const PUBLIC_DIR = 'public'
const routes = require('./routes')
const api = require('./api')

app.set('port', (process.env.PORT || 5000))

app.use(express.static(PUBLIC_DIR))
app.use(bodyParser.json())
// app.use(checkUserAgent)

app.listen(app.get('port'), function () {
    console.log('Node app is running on port: ' + app.get('port'))
})

// function checkUserAgent(req, res, next) {
//     console.log(
//         useragent.parse(req.headers['user-agent']).os.toString(),
//         useragent.parse(req.headers['user-agent']).device.toString()
//     )

//     next()
// }