import TelegramBot from "node-telegram-bot-api";
import * as env from 'dotenv'
import { mainMenuKeyboard } from "./config-keyboards.js";

env.config()


const bot = new TelegramBot(process.env.BOT_TOKEN,{
    polling:{
        interval: 300,
        autoStart: true
    }
})

bot.on('polling_error', err => console.log(err.message))
bot.onText(/\/start/, async(msg)=>{
    try {

            await bot.sendMessage(msg.chat.id, 'Bot started')
        if(msg.text.length > 6){
            await bot.sendMessage(msg.chat.id, `Вы зашли по реферальной ссылке пользователя с ID ${msg.text.slice(7)}`)
        }
    } catch (error) {
        console.log(error)
    } 
})
bot.on('text', async(msg)=>{
    try {
        await bot.sendMessage(msg.chat.id, 'Меню', {
            reply_markup:{
                keyboard: mainMenuKeyboard,
                resize_keyboard: true
            }
        })

    } catch (error) {
        console.log(error)
    }
})