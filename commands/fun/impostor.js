const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const clientN = require("nekos.life")
const neko = new clientN()
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "impostor",
  alias: [],
execute: async(client, message, args) => {

	const servidor = message.guild.id
    
    if(langs.tiene(servidor)){
          let random = [
    "era el impostor",
    "no era el impostor"
    ] //Hacemos frases para ver si es o no

    const mencionado = message.mentions.members.first()
    
    
    if(!mencionado)//Si el autor no menciono a nadie
    
     return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`) //Enviamos el mensaje
    
    //Pero si menciona
    
    message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
        
    } else {
          let random = [
    "was the impostor",
    "wasn't the impostor"
    ] //Hacemos frases para ver si es o no

    const mencionado = message.mentions.members.first()
    
    
    if(!mencionado)//Si el autor no menciono a nadie
    
     return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} remaining impostors 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`) //Enviamos el mensaje
    
    //Pero si menciona
    
    message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} remaining impostors 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
    }
    
    
    }
};