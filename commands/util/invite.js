const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "invite",
  alias: ["Invite"],
  execute: async(client, message, args) => {

    const servidor = message.guild.id

    if(langs.tiene(servidor)){
      const embed = new Discord.MessageEmbed()
    .setTitle("Invita a Neon Z")
    .setDescription(`[Click aquí](https://discord.com/oauth2/authorize?client_id=904801028728299561&scope=bot&permissions=1970465919)`)
    .setColor(0x00F3FF)

    message.channel.send({ embeds: [embed]})

    } else {
      const embed = new Discord.MessageEmbed()
    .setTitle("Invite to Neon Z")
    .setDescription(`[Click here](https://discord.com/oauth2/authorize?client_id=904801028728299561&scope=bot&permissions=1970465919)`)
    .setColor(0x00F3FF)

    message.channel.send({ embeds: [embed]})
    }  

  },
};