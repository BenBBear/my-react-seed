var path = require('path');
var webpack = require('webpack');
var port = 3111;


module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:'+port,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../index')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify("5fa3b9"),
            __DEV__: true 
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js','.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }]
    },
    port:port
};
