const https = require('https');
;
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    var buffer = [];

    response.on('data', function(data) {
      buffer.push(data)
    })

    response.on('end', function() {
      console.log(buffer[0].toString())
    })

  })

}

getAndPrintHTML()
