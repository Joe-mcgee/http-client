const https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.on('data', function(data) {
      var buffer = [];
      buffer.push(data)

      response.on('end', function() {
        console.log(buffer)
      })
    })



  })

}

getAndPrintHTML()
