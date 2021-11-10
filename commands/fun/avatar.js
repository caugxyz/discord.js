const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "avatar",
  alias: ["pp"],
  execute: async(client, message, args) => {

    var member =
  message.mentions.members.first() || 
  message.mentions.members.first.id ||
  message.member; //Autor

    const servidor = message.guild.id
    
    if(langs.tiene(servidor)) {
        const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${member.displayName}`)
    .setColor("RANDOM")
    .setImage(member.user.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
    .setFooter(`Pedida por ${message.member.displayName}`)
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
    } else {
        const embed = new Discord.MessageEmbed()
    .setTitle(`${member.displayName}'s avatar`)
    .setColor("RANDOM")
    .setImage(member.user.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
    .setFooter(`Requested by ${message.member.displayName}`)
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
    }

  },
};