var generator = require('./lib/generator')

module.exports = function (format) {
  if (format) {
    generator.setFormat(format)
  }

  return {
    generate: generator.generate
  , setFormat: generator.setFormat
  }
}