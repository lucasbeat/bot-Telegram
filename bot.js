const Telegram = require('node-telegram-bot-api')
const token = require('./config')
const bot = new Telegram(token, { polling: true })

bot.on('message', (msg) => {
    if (msg.text) {
        bot.sendMessage(msg.chat.id, "Bem vindo ao Beat_Bot")
    }
})