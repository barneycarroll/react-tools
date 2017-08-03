// ==============================================
// P R O D U C T I O N   C O N F I G
// ==============================================
//
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const now = new Date();
let timestamp = [
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes()
]
.map((x) => x.toString())
.map((x) => (x.length < 2) ? `0${x}` : x)
.reduce((acc, curr) => acc + curr, '');

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, '../', 'build'),
        filename: `bundle.${timestamp}.js`
    }
});
