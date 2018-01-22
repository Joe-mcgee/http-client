

const https = require('https');
const step4 = require('../step-4/step-4.js');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
  console.log(html.toLowerCase())
}

step4.getHTML(requestOptions, printLowerCase)
