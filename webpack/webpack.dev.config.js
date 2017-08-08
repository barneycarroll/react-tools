// ==============================================
// D E V   C O N F I G
// ==============================================
//
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 9000,
    }
});
