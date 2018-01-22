const https = require('https');
const step4 = require('../step-4/step-4.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}

step4.getHTML(requestOptions, printHTML);


