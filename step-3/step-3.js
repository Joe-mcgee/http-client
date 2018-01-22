const https = require('https')
function getAndPrintHTML (options) {

  https.get(options, function(response) {
    var buffer = [];

    response.on('data', function(data) {
      buffer.push(data)
    })

    response.on('end', function() {
      console.log(buffer[0].toString())
    })

  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions)
