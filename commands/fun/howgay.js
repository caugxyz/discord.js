const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "howgay",
  alias: ["gayhow"],
  execute: async(client, message, args) => {

    const member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 100)
        const servidor = message.guild.id

        if(langs.tiene(servidor)){
            const embed = new Discord.MessageEmbed()
        .setTitle("Calculador gay 🏳️‍🌈")
        .setDescription(`**${member.username}** es ` + rng + "% gay")
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] })
            
        } else {
            const embed = new Discord.MessageEmbed()
        .setTitle("Gay calculator 🏳️‍🌈")
        .setDescription(`**${member.username}** is ` + rng + "% gay")
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] })
        }

  },
};