const { middlewareProcessing, deleteMessage } = require('../helpers/processing')

module.exports = (bot) => {
  bot.on('text', middlewareProcessing, (ctx, next) => {
    const { message: { text } } = ctx.update

    setTimeout(() => {
      ctx.replyWithHTML(`"<b>${text}</b>"`)
        .then(() => deleteMessage(ctx))
    }, 1000)
  })
}
