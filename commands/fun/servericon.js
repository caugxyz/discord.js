const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const ms = require('ms')

module.exports = {
  name: "servericon",
  alias: ["Servericon"],
  execute: async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle('Server icon')
    .setImage(message.guild.iconURL({ format: 'png', size: 1024, dynamic: true }))
    .setColor("RANDOM")
    
    message.channel.send({embeds:[embed]})

  },
};