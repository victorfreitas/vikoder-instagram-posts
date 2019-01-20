const debug = require('debug')

module.exports = (namespace, message) => debug(`vikoder:${namespace}`)(message)
