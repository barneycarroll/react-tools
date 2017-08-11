const fileSystem  = require('fs')

const browserSync = require('browser-sync')
const {rollup}    = require('rollup')
const {watch}     = require('chokidar')

const bsConfig    = require('./bs-config')
const ruConfig    = require('./rollup.config')

const merge = (...objects) =>
  Object.assign({}, ...objects)

const tools = fileSystem
  // Get all items in ./src/
  .readdirSync('./src/')
  // Take only directories
  .filter(dir =>
    fileSystem.statSync('./src/' + dir).isDirectory()
  )
  // Identify index files within
  .map(dir => ({
    dir,
    index : fileSystem.readdirSync('./src/' + dir).find(file =>
      /^index.jsx?$/.test(file)
    )
  }))
  // Take only those with indices
  .filter(({index}) =>
    index
  )

// Compile each tool with Rollup
const bundle = () =>
  Promise.all(
    tools.map(({ dir, index }) => {
      rollup(
        merge(ruConfig, { entry : `./src/${ dir }/${ index }` })
      ).then(bundle =>
        bundle.write(
          merge(ruConfig, { dest : `./server/${ dir }/index.js` })
        )
      )
    })
  )

// Start BrowserSync server
const serve = () => {
  browserSync(
    merge(bsConfig, {
      files: [
        './src/**/!(*.js)',
        './server/**/*.js',
      ],

      server: {
        baseDir: './src',
        directory: true,
      },

      middleware: (req, res, next) => {
        next()
      }
    })
  )
}

watch('./src/**/*.js').on('change', bundle)

bundle().then(serve)

