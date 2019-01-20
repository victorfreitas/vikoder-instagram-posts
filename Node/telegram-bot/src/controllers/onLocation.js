const { middlewareProcessing, deleteMessage } = require('../helpers/processing')
const geoCoder = require('../helpers/geocoder')

module.exports = (bot) => {
  bot.on('location', middlewareProcessing, ctx => {
    const { latitude, longitude } = ctx.update.message.location

    geoCoder
      .reverse({ lat: latitude, lon: longitude })
        .then(([ data ]) => {
          ctx.reply(`Country: ${data.country}\nCountry Code: ${data.countryCode}`)
            .then(() => deleteMessage(ctx))
        })
        .catch(err => {
          ctx.reply(`Error: ${err.message}`)
            .then(() => deleteMessage(ctx))
        })
  })
}
