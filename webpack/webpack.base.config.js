// ==============================================
// B A S E    C O N F I G
// ==============================================
//
const webpack = require('webpack');

module.exports = {
    entry: {
        toolOne: './src/ToolOne/index.js',
        toolTwo: './src/ToolTwo/index.js',
        toolThree: './src/ToolThree/index.js'
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
