const https = require('https');
const step4 = require('../step-4/step-4.js');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function leetspeak(html) {
  output = html
  let cipher = {
    '4': /a/g,
    '3': /e(?!r)/g,
    '1': /l/g,
    '0': /o(?!u)/g,
    '5': /s/g,
    '7': /t/g,
    'x': /ck/g,
    '0r': /er/g,
    'j00': /you/g

  };
  for (key in cipher) {
    output = output.replace(cipher[key], key);
  }
  console.log(output);
}


step4.getHTML(requestOptions, leetspeak)
