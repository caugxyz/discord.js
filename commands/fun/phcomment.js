const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "phcomment",
  alias: ["Phcomment"],
  execute: async(client, message, args) => {

    const txt = args.join('%20');
    
      const servidor = message.guild.id
      
      if(langs.tiene(servidor)){
          
          if (!txt) return message.channel.send("No pusiste nada")
            
    let autor = message.author; 
        
    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') //Pedimos la imagen
        
    message.channel.send({ files: [attachment]})
          
      } else {
          if (!txt) return message.channel.send("You did not put anything")
            
    let autor = message.author; 
        
    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') //Pedimos la imagen
        
    message.channel.send({ files: [attachment]})
      }
  },
};