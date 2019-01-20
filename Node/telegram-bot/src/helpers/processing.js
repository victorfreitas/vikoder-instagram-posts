let messageId, chatId

class Processing {
  middlewareProcessing(ctx, next) {
    ctx.reply('Processing...')
      .then(({message_id, chat}) => {
        messageId = message_id
        chatId = chat.id
        next()
      })
  }

  deleteMessage(ctx) {
    ctx.deleteMessage(messageId, chatId)
      .then(() => {})
      .catch(() => {})
  }
}

module.exports = new Processing()
