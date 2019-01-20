const path = require('path')

const readFile = require('../helpers/readfile')

const readmeFile = path.join(__dirname, '..', 'views/about.md')

module.exports = (bot) => {
  bot.command('about', ctx => {
    readFile(readmeFile)
      .then(body => ctx.replyWithMarkdown(body))
      .catch(error => {})
  })
}
