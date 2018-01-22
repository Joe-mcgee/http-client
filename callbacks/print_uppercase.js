const https = require('https');
const step4 = require('../step-4/step-4.js');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase())
  /* Write your code here! */

}

step4.getHTML(requestOptions, printUpperCase);
