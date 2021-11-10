const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = {
  name: "botstats", 
  alias: ["Botstats"], 

execute (client, message, args){

const embed = new Discord.MessageEmbed()
  .setColor("00F3FF")

  .setAuthor(`Bot information`, client.user.displayAvatarURL({ size: 1024, format: 'png' }))
  .addField(`Node version`, `${process.version}`, )
  .addField(`Library`, Discord.version, )
  .addField(`Language`, `JavaScript`, )
  .addField(`Memory`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, )
  .addField(`Servers`, `${client.guilds.cache.size}`, )
  .addField(`Channels`, `${client.channels.cache.size}`, )
 .addField(`Commands`, `${client.commands.size}`, )

 message.channel.send({ embeds: [embed] })

 }

}  