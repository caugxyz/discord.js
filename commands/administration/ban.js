const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require("fs")
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "ban",
  alias: ["banear"],
  execute: async(client, message, args) => {
      
      const servidor = message.guild.id
    const español = 'es'

	if(langs.tiene(servidor)) {
        
   if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("No tengo permisos")
   if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("No tienes permisos")

  let user = message.mentions.members.first();
  let enviarmdxd = message.mentions.members.first();
  if(user === message.guild.me) return message.channel.send("No me puedo banear")

  let banReason = args.join(' ').slice(22);

  if(!user) return message.channel.send("Tienes que mencionar a un usuario")

  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes banear a una persona con un rol mayor o igual que tú")
  if (message.guild.me.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedo banear a una persona con mayor o igual rol que yo")

  if(user === message.author) return message.channel.send("No te puedes banear tu mismo")

  if(!banReason) banReason = 'No especificada'

      user.ban({ reason: banReason })
      var embed = new Discord.MessageEmbed()
  .setTitle("BANEO")
  .addField('Usuario', `${user}`)
  .addField('Razón', `${banReason}`)
  .addField('Moderador', `${message.author}`)
  .setColor(0x00F3FF);
      message.channel.send({embeds: [embed]})
      
      enviarmdxd.send(`Has sido baneado de **${message.guild.name}** por **${banReason}** `)
        
    } else {
            if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I don't have enough permissions")

  let banReason = args.join(' ').slice(22);

  if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You do not have permissions")
        
  let user = message.mentions.members.first();
  let enviarmdxd = message.mentions.members.first();
  if(user === message.guild.me) return message.channel.send("I can't ban myself")

  if(!user) return message.channel.send("You must mention an user")

  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("You cannot ban a person with greater or equal role than you")
  if (message.guild.me.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("I can not ban a person with greater or equal role than me")

  if(user === message.author) return message.channel.send("You can't ban yourself")

  if(!banReason) banReason = 'Not specified'

      user.ban({ reason: banReason })
      var embed = new Discord.MessageEmbed()
  .setTitle("BANEO")
  .addField('Banned user', `${user}`)
  .addField('Reason', `${banReason}`)
  .addField('Moderator', `${message.author}`)
  .setColor(0x00F3FF);
      message.channel.send({embeds: [embed]})
      
      enviarmdxd.send(`You have been banned from the server **${message.guild.name}** for **${banReason}** `)
    }


  },
};