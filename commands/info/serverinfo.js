const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs') 

module.exports = {
  name: "serverinfo",
  alias: ["Serverinfo"],
  execute: async(client, message, args) => {
      
      const serverxdxd = message.guild.id
      
      if(langs.tiene(serverxdxd)) {
          const embed = new Discord.MessageEmbed()
      .setTitle("Información del servidor")
      .setColor("00F3FF")
      .setThumbnail(message.guild.iconURL({ format: 'png', size: 1024, dynamic: true }))
      .setAuthor(message.guild.name, message.guild.iconURL({ format: 'png', size: 1024, dynamic: true }))
      .addField('Nombre ', `${message.guild.name}`)
      .addField('ID', `${message.guild.id}`)
      .addField('Creado el', `${message.guild.createdAt.toDateString()}`)
      .addField('Dueño', `${(await message.guild.fetchOwner())}`)
      .addField('Miembros', `${message.guild.memberCount.toString()}`)
      .addField('Roles', `${message.guild.roles.cache.size}`)
      .addField('Emojis', `${message.guild.emojis.cache.size}`)
      .addField('Boosts', `${message.guild.premiumSubscriptionCount.toString()}`)
      .addField('Nivel de verificación', `${message.guild.verificationLevel}`);
      message.channel.send({ embeds: [embed] })
          
      } else {
          const embed = new Discord.MessageEmbed()
      .setTitle("Server information")
      .setColor("00F3FF")
      .setThumbnail(message.guild.iconURL({ format: 'png', size: 1024, dynamic: true }))
      .setAuthor(message.guild.name, message.guild.iconURL({ format: 'png', size: 1024, dynamic: true }))
      .addField('Name ', `${message.guild.name}`)
      .addField('ID', `${message.guild.id}`)
      .addField('Created at', `${message.guild.createdAt.toDateString()}`)
      .addField('Server´s owner', `${(await message.guild.fetchOwner())}`)
      .addField('Members', `${message.guild.memberCount.toString()}`)
      .addField('Roles', `${message.guild.roles.cache.size}`)
      .addField('Emojis', `${message.guild.emojis.cache.size}`)
      .addField('Boosts', `${message.guild.premiumSubscriptionCount.toString()}`)
      .addField('Verification level', `${message.guild.verificationLevel}`);
      message.channel.send({ embeds: [embed] })
          
      }

      

  },
};