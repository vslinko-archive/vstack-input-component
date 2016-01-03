/**
 * vstack by @vslinko
 */

var webpack = require('webpack');
var yargs = require('yargs');
var path = require("path");

var argv = yargs
    .boolean('p').alias('p', 'optimize-minimize')
    .boolean('h').alias('h', 'hot')
    .argv;

var entry = argv.h ?
    ['webpack-dev-server/client?/', 'webpack/hot/dev-server', path.join(__dirname, 'index')] :
    [path.join(__dirname, 'index')];

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.p ? 'production' : 'development')
    })
];

if (argv.h) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

var jsxLoaders = argv.h ?
    ['react-hot', 'jsx'] :
    ['jsx'];

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'public', 'assets'),
        filename: 'example.js',
        publicPath: '/assets/'
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loaders: jsxLoaders},
            {test: /\.(png|jpg|gif|svg|eot|woff|ttf)$/, loaders: ['file-loader']},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        ]
    }
};
