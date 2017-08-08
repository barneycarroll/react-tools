# folder structure

|-- /build
|   |-- toolOne.201708071423.js
|   |-- toolTwo.201708071430.js
|   `-- toolThree.201708071500.js
|
|-- /src
|   |-- /shared
|   |
|   |-- /toolOne
|   |   |-- /__tests__
|   |   |-- /__utils__
|   |   |-- /components
|   |   |-- toolOne.js
|   |   `-- index.html
|   |
|   |-- /toolTwo
|   |   |-- /__tests__
|   |   |-- /__utils__
|   |   |-- /components
|   |   |-- toolTwo.js
|   |   `-- index.html
|   |
|   `-- /toolThree
|       |-- /__tests__
|       |-- /__utils__
|       |-- /components
|       |-- toolThree.js
|       `-- index.html
|
|-- /webpack
|   |-- base.config.js
|   |-- dev.config.js
|   `-- prod.config.js
|
|-- .gitignore
|-- package.json
`-- readme.md


# yarn commands
- 'yarn start' - runs a server that gives access to each of the tools via a file system nav
- 'yarn build' - builds **ALL** tools and creates a bundle file that's time stamped.
