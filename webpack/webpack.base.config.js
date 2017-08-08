// ==============================================
// B A S E    C O N F I G
// ==============================================
//
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, '../', 'src'),

    entry: {
        toolOne: './ToolOne/index.js',
        toolTwo: './ToolTwo/index.js',
        toolThree: './ToolThree/index.js'
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
