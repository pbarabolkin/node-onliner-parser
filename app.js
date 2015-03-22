var argv = require('optimist').argv,
    request = require('request'),
    $ = require('cheerio');

if (!argv.product)
    return console.error('"product" parameter is required');

var baseUrl = 'http://catalog.onliner.by/',
    url = baseUrl + argv.product;

request.get(url, function (err, response, body) {
    if (err)
        return console.error(err);

    var price = $('.pprice a', body).first().text().trim();
    console.log(price);
});