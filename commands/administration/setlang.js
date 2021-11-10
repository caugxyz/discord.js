const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "setlang",
  alias: ["lang"],
  execute: async(client, message, args) => {

    const servidor = message.guild.id
    const español = 'es'
    const ingles = 'en'

    if(!args[0]){
    	if(langs.tiene(servidor)) return message.channel.send('Que lenguaje quieres que ponga?')
        if(!langs.tiene(servidor)) return message.channel.send('What language do you want to use?')
    }

    if(args[0] === 'es') {
        
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('No tienes permisos')
        
          if(langs.tiene(servidor)) return message.channel.send('Ya estoy hablando español ._.')
        
      langs.establecer(servidor, español)

      message.channel.send('Hablaré español')
        
        return
    }

    if(args[0] === 'en') {
        
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You do not have permissions')
        
        if(!langs.tiene(servidor)) return message.channel.send('I am speaking english ._.')
        
      langs.eliminar(servidor, español)

      message.channel.send('I will speak english')
    } else {
        message.channel.send('Idiomas no validos')
    }
      
      
  },
};