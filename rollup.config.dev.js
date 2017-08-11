import fs          from 'fs'

import babel       from 'rollup-plugin-babel'
import cjs         from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const config = {
  format    : 'iife',
  plugins   : [
    babel(),
    cjs( {
      include : './node_modules/**'
    } ),
    nodeResolve( {
      jsnext  : true,
      main    : true
    } )
  ],
  sourceMap : true,
  watch     : { chokidar : true }
}

const tools = fs.readdirSync('./src/').filter(item =>
  fs.readdirSync()
)

export default tools.map(toolPath => ({
  ...config, {
    entry : './src/' + toolPath + '/index.jsx',
    dest  : './server/' + toolPath + '/index.js'
  }}
))