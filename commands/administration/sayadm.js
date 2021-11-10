const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "sayadm",
  alias: ["Sayadm"],
  execute: async(client, message, args) => {

    const servidor = message.guild.id
    
    if(langs.tiene(servidor)){
        
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('No puedes hacer esto')
    const txt = args.join(' ')
    if(!txt) return messafe.channel.send('Tienes que decir algo')
    message.delete()
    message.channel.send(txt)
        
    } else {
     if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Yo can not do it')
    const txt = args.join(' ')
    if(!txt) return messafe.channel.send('You have to say something')
    message.delete()
    message.channel.send(txt)
    }

  },
};