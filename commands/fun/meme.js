const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const spanishmemes = require('spanish.memes');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "spanishmeme", 
  alias: ["Spanishmeme"], 

 execute (client, message, args){

 const embed = new Discord.MessageEmbed()

 .setTitle('Spanish meme')
 .setColor("RANDOM")
 .setImage(spanishmemes.Meme())

 message.channel.send({embeds: [embed]})

 }

}