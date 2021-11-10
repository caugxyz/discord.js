const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const td = require('@iamtraction/google-translate')
const fs = require('fs');

module.exports = {
  name: "translate",
  alias: ["traduce"],
  execute: async(client, message, args) => {

    let texto = args.join(' ')
    if(!texto) return message.channel.send("Que quieres que traduzca?")

    const traducido = await td(texto, {
      to: "en"
    })

    const embed = new Discord.MessageEmbed()
    .setTitle('Translated text')
    .addField('Text to translate', texto)
    .addField('Translate', `${traducido.text}`)

    message.channel.send({ embeds: [embed] })

  },
};