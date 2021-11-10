const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping", 
  alias: ["Ping"], 

execute (client, message, args){

const embed = new Discord.MessageEmbed()
.setTitle("Ping")
.setDescription(`🏓 Pong! **${client.ws.ping}**`)
.setColor("00F3FF")
.setFooter("Neon Z")
.setTimestamp()

 message.channel.send({ embeds: [embed] })

 }

} 