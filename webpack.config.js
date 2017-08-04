const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


module.exports.entry = './comp.js'

module.exports.output = {
	filename: 'index.js'
};

module.exports.module = {
	rules: [
		{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules|assets|libs/
		}
	]
};

module.exports.plugins = [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
            compress: {
                warnings: false
            }
    })
];

// use source-maps as devtool
module.exports.devtool = 'source-map';