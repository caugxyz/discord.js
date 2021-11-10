const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "jumbo",
  alias: ["Jumbo"],
  execute: async(client, message, args) => {

    const servidor = message.guild.id
    
    if(langs.tiene(servidor)) {
        
        if(!args[0]) return message.channel.send("Tienes que poner un emoji")

    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])

    if(!emoji) return message.channel.send("No es un emoji valido")

    const embed = new Discord.MessageEmbed()
    .setTitle("Emoji")
    .setImage(emoji.url)
    .setColor("RANDOM")

    message.channel.send({ embeds: [embed] })
      
        
    } else {
        if(!args[0]) return message.channel.send("You must put an emoji")

    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])

    if(!emoji) return message.channel.send("This is not a valid emoji")

    const embed = new Discord.MessageEmbed()
    .setTitle("Emoji")
    .setImage(emoji.url)
    .setColor("RANDOM")

    message.channel.send({ embeds: [embed] })
    }

  },
};