# Setting up
This README details the minimum steps required in order to setup a simple Webpack, React and Babel project.

## Steps
1. `mkdir ${projectName} && cd ${projectName}`.
2. Using `yarn init` initialise a `package.json`, optionally adding the `-y` flag in order to answer yes to all questions asked.
3. `yarn add react react-dom` to install these dependencies first.
4. Next `yarn add --dev babel-core babel-loader babel-preset-react babel-preset-env`.
5. We mustn't forget to install Webpack and a dev server... `yarn add --dev webpack webpack-dev-server`.
6. In order to setup the server and run it, in your `package.json`, `scripts` section, add the line `"start": "webpack-dev-server"`.
7. `touch index.html` and populate with a mountpoint element (`<div id="app">`) and link a `<script>` element to `bundle.js`, our output file.
8. Create your first React component with `touch app.js`.
9. `touch webpack.config.js` and add the following snippet:
```
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
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
    }
}
```
