const Discord = require("discord.js")
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "say",
  alias: ["Say"],
  execute: async(client, message, args) => {

    const servidor = message.guild.id
    
    if(langs.tiene(servidor)) {
        let texto = args.join(' ')
    if(!texto) return message.channel.send("Tienes que decir algo")
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setTitle('Alguien dijo algo <a:emoji_4:901929491864125550>')
    .addField(`${texto}`, `Por ${message.member.displayName}`)
    .setColor("RANDOM")
    message.channel.send({ embeds:[embed] })
    } else {
        let texto = args.join(' ')
    if(!texto) return message.channel.send("You have to say something")
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setTitle('Someone said something <a:emoji_4:901929491864125550>')
    .addField(`${texto}`, `By ${message.member.displayName}`)
    .setColor("RANDOM")
    message.channel.send({ embeds:[embed] })
    }
  },
};