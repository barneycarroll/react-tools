module.exports = {
  entry     : './src/index.js',
  dest      : './build/index.js',
  format    : 'iife',
  plugins   : [
    require( 'rollup-plugin-babel' )(),
  ],
  sourceMap : true,
}
