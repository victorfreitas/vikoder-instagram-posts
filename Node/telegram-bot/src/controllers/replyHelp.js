const path = require('path')

const user = require('./user')
const readmeFile = path.join(__dirname, '../..', 'readme.md')
const readFile = require('../helpers/readfile')

module.exports = (ctx, start = false) => {
  start && user(ctx.update.message.from).make()

  readFile(readmeFile)
    .then(body => ctx.replyWithMarkdown(body))
    .catch(error => {})
}
