var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: ['./src/index.js', './src/style.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader',
                    'sass-loader'
                ])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
}