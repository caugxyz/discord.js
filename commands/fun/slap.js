const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const clientN = require("nekos.life")
const neko = new clientN()

module.exports = {
  name: "slap",
  alias: [],
execute: async(client, message, args) => {

    let mention = message.mentions.members.first() 
    if(mention === message.member) return message.channel.send('You can not slap yourself')

    if(!mention) return message.channel.send("Who are you going to slap?") 
    

neko.sfw.slap().then(neko => { 
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${message.member.displayName}** slapped to **${mention.displayName}**`)
    .setImage(neko.url)
    message.channel.send({embeds: [embed]})

  })
    }
};