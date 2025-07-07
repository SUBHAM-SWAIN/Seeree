const url = require('url');
let myUrl = 'https://example.com:8000/home?a=1&b=2';
let parsedUrl = url.parse(myUrl);
console.log(parsedUrl);

const urlObject = {
  protocol: 'https:',

  host: 'example.com:8000',
  port: '8000',
  hostname: 'example.com',
  search: '?a=1&b=2',
  query: 'a=1&b=2',
  pathname: '/home',
  path: '/home?a=1&b=2',
}

const myUrlObject = url.format(urlObject);
console.log(myUrlObject);

let baseUrl = 'https://example.com:8000/home';
let relativeUrl = '?a=1&b=2';
let fullUrl = url.resolve(baseUrl, relativeUrl);
console.log(fullUrl);