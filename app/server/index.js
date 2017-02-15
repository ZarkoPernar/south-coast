var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var sendEmail = require('./sendEmail')

const PUBLIC_DIR = 'public'
const routes = require('./routes')
const api = require('./api')

let list = require('./list.json')

app.set('port', (process.env.PORT || 5000))

app.use(function (req, res, next) {
    res.setHeader('X-Frame-Options', 'SAMEORIGIN')
    next()
  }
)
app.use(express.static(PUBLIC_DIR))
app.use(bodyParser.json())
// app.use(checkUserAgent)

app.listen(app.get('port'), function () {
    console.log('Node app is running on port: ' + app.get('port'))
})

app.get('/list', function(req, res) {
    res.send(list)
})

app.post('/api/send/email',function(request, response) {   
    sendEmail(request.body)
        .then((result) => {
            response.send(result)
        })
})
app.post('/send/email', bodyParser.urlencoded(), function(request, response) {
    sendEmail(request.body)
        .then((result) => {
            response.send(result)
        })
})

// function checkUserAgent(req, res, next) {
//     console.log(
//         useragent.parse(req.headers['user-agent']).os.toString(),
//         useragent.parse(req.headers['user-agent']).device.toString()
//     )

//     next()
// }


