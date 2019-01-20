require('./config/dotenv')

const bot = require('./controllers/bot')
const onStart = require('./controllers/onStart')
const commandAbout = require('./controllers/commandAbout')
const commandHelp = require('./controllers/commandHelp')
const onText = require('./controllers/onText')
const onLocation = require('./controllers/onLocation')

onStart(bot)
commandAbout(bot)
commandHelp(bot)
onText(bot)
onLocation(bot)

bot.launch()
