const rollupBabel = require('rollup-plugin-babel')
const rollupCJS   = require('rollup-plugin-commonjs')
const rollupNPM   = require('rollup-plugin-node-resolve')

module.exports = {
  format    : 'iife',
  sourceMap : true,
  watch     : { chokidar : true },
  plugins   : [
    rollupBabel({
      exclude : './node_modules/**',
    }),

    rollupCJS({
      include : './node_modules/**',
    }),

    rollupNPM({
      jsnext  : true,
      main    : true
    })
  ],
}
