const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "servidor",
  alias: ["server"],
  execute: async(client, message, args) => {

    const servidor = message.guild.id

    if(langs.tiene(servidor)) {
      const embed = new Discord.MessageEmbed()
    .setTitle("Soporte de Neon Z")
    .setDescription('[Servidor de soporte](https://dsc.gg/neonz)');

    message.channel.send({ embeds:[embed] })
    } else {
      const embed = new Discord.MessageEmbed()
    .setTitle("Neon Z support")
    .setDescription('[Support server](https://dsc.gg/neonz)');

    message.channel.send({ embeds:[embed] })
    }

    

  },
};