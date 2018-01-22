const https = require('https');
const step4 = require('../step-4/step-4.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function reverse(html) {
  console.log(html.split('').reverse().join(''));
}

step4.getHTML(requestOptions, reverse)
