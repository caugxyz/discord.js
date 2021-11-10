const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "createinvite", 
  alias: ["Createinvite"], 

 async execute (client, message, args){

 const invite = await message.channel
  .createInvite({ maxAge: 0, reason: `Created by ${message.author.tag}` })
  .catch(() => null);
  
 if (!invite) return message.channel.send('An error has occurred, you may not have permissions');
 message.channel.send(`Invitation ${invite.url}`);

 }

}