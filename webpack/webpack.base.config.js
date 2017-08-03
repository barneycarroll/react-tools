// ==============================================
// B A S E    C O N F I G
// ==============================================
//
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/App.js'
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    },
}
