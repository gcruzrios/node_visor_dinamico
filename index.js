const proxy = require('express-http-proxy')
const express = require('express')
const app = express()
const url = require('url')
const path = require('path')
 
const geoserverProxy = {
  forwardPath: (req, res) => {
    return url.parse(req.originalUrl).path
  }
}

app.use('/geoserver/wms', proxy('http://18.218.14.134:8080/geoserver/CENIGA/wms', geoserverProxy))
app.use('/geoserver/wfs', proxy('http://18.218.14.134:8080/geoserver/CENIGA/wfs', geoserverProxy))

//app.use('/geoserver/wms', proxy('http://geomapa.tk:8080/geoserver/costarica-snit/wms', geoserverProxy))
//app.use('/geoserver/wfs', proxy('http://geomapa.tk:8080/geoserver/costarica-snit/wfs', geoserverProxy))


app.use('/demo/static', express.static('static'))

app.get('/demo', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(3000, function () {
  console.log('app listening on port 3000!');
})