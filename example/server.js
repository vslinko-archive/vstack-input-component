/**
 * vstack by @vslinko
 */

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');
var yargs = require('yargs');
var path = require('path');

var argv = yargs
    .boolean('h').alias('h', 'hot')
    .argv;

var port = process.env.PORT || 3000;
var host = process.env.IP || 'localhost';

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: argv.hot,
    contentBase: path.join(__dirname, 'public')
});

server.listen(port, host, function(err, result) {
    if (err) {
        console.log(err);
    }
});
