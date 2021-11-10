const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "purge",
  alias: ["Purge"],
  execute: async(client, message, args) => {
      
    const servidor = message.guild.id
    
    if(langs.tiene(servidor)) {
        
        if (message.member.permissions.has("MANAGE_MESSAGES")){

        const member = message.mentions.members.first();
        const messages = message.channel.messages.fetch();
    
        if(member){
          return;
    
        } else {
          if (!args[0]) return message.reply("Especifica los mensajes que quieres que borre");

        if(args[0].includes('.')) return message.channel.send('No puedes usar decimales')
        if(args[0].includes(',')) return message.channel.send('No puedes usar decimales')

          if (parseInt(args[0]) < 1) return message.channel.send("Solo se pueden digitos mayores o iguales a 1")

          if (isNaN(args[0])) return message.reply("Solo están permitidos números")
    
          if (parseInt(args[0]) > 99) return message.channel.send("Solo puedo borrar menos de 99 mensajes")
    
          await message.channel
          .bulkDelete(parseInt(args[0]) + 1)
          .catch((err) => console.log(err));
        };
        } else {
          message.channel.send("No tienes permisos")
        }
        
    } else {

    if (message.member.permissions.has("MANAGE_MESSAGES")){

        const member = message.mentions.members.first();
        const messages = message.channel.messages.fetch();
    
        if(member){
          return;
    
        } else {
          if (!args[0]) return message.reply("Specify the messages you want me to delete");

        if(args[0].includes('.')) return message.channel.send('You cannot use decimals')
        if(args[0].includes(',')) return message.channel.send('You cannot use decimals')

          if (parseInt(args[0]) < 1) return message.channel.send("Only digits greater than or equal to 1 can be")

          if (isNaN(args[0])) return message.reply("Only numbers are allowed")
    
          if (parseInt(args[0]) > 99) return message.channel.send("I can only delete less than 99 messages")
    
          await message.channel
          .bulkDelete(parseInt(args[0]) + 1)
          .catch((err) => console.log(err));
        };
        } else {
          message.channel.send("You do not have permissions")
        }
        
        }

  },
};