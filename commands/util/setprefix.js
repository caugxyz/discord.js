const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')
const langs = new db.crearDB('langs')

module.exports = {
  name: "setprefix",
  alias: ["set-prefix"],
  execute: async(client, message, args) => {

  var server = message.guild.id

  if(langs.tiene(server)) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("No tienes los permisos necesarios")

  let prefix = args.join(' ')
  if(!prefix) return message.channel.send("Necesitas poner el prefix")
      
  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(prefix === emoji) return message.channel.send('No puedes poner emojis en el prefix')

  if(prefix.length >= 4) return message.channel.send("El prefix no puede tener más de 2 digitos")
  

  prefix_db.establecer(`${server}`, prefix)

  message.channel.send(`Prefix cambiado a **${prefix}** `)
    
  } else {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You do not have the necessary permissions")

  let prefix = args.join(' ')
  if(!prefix) return message.channel.send("You must put the prefix")
      
  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(prefix === emoji) return message.channel.send('No puedes poner emojis en el prefix')

  if(prefix.length >= 4) return message.channel.send("The prefix cannot have more than 3 digits")
  

  prefix_db.establecer(`${server}`, prefix)

  message.channel.send(`Prefix changed to **${prefix}** `)
  }

  },
};