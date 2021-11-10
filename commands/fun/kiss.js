const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const clientN = require("nekos.life")
const neko = new clientN()
const db = require("megadb")
const langs = new db.crearDB('langs')

module.exports = {
  name: "kiss", 
  alias: ["Kiss"], 

 execute: async(client, message, args) => {

  
 const servidor = message.guild.id
 
 if(langs.tiene(servidor)) {
     let user = message.mentions.members.first();
  if(user === message.member) return message.channel.send('No puedes besarte tu mismo')

  let mention = message.mentions.members.first()
  if(!mention) return message.channel.send("Tienes que mencionar a alguien")   

 neko.sfw.kiss().then(neko => {
   const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(`**${message.member.displayName}** besó a **${mention.displayName}**`)
   .setImage(neko.url)
   message.channel.send({embeds: [embed]})
     
    })
     
 } else {
     let user = message.mentions.members.first();
  if(user === message.member) return message.channel.send('You can´t kiss yourself')

  let mention = message.mentions.members.first()
  if(!mention) return message.channel.send("You must mention a person")   

 neko.sfw.kiss().then(neko => {
   const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(`**${message.member.displayName}** kissed to **${mention.displayName}**`)
   .setImage(neko.url)
   message.channel.send({embeds: [embed]})
     
    })
     
 }

 }

}