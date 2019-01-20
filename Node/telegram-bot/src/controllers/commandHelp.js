const replyHelp = require('./replyHelp')

module.exports = (bot) => {
  bot.command('help', ctx => replyHelp(ctx))
}
