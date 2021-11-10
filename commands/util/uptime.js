const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "uptime", 
  alias: ["uptime"], 

 execute (client, message, args){

 let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`My active time is ${days}d ${hours}h ${minutes}m ${seconds}s <a:emoji_3:901929457101705257>`)
    
    message.channel.send({ embeds: [embed] })

 }

}  