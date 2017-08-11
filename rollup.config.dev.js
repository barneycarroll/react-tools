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

const tools = fs.readdirSync('./src/').filter(dir => {
  try {
    return fs.readdirSync( './src/' + dir ).includes('index.jsx')
  }
  catch (e){
    return false
  }
})

export default tools.map(path =>
  Object.assign({}, config, {
    entry : './src/' + path + '/index.jsx',
    dest  : './server/' + path + '/index.js'
  })
)
