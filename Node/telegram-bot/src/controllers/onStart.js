const replyHelp = require('./replyHelp')

module.exports = (bot) => {
  bot.start(async ({ update, reply }, next) => {
    const from = update.message.from
    await reply(`Hi ${from.first_name}!`)
    next()
  })

  bot.start(ctx => replyHelp(ctx, true))
}
