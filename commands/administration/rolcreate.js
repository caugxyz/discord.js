const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "rolcreate",
  alias: ["Rolcreate"],
  execute: async(client, message, args) => {
	
    const  servidor = message.guild.id 
      
	if(langs.tiene(servidor)){
        
            if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.channel.send('No tengo permisos');

    if (!message.member.permissions.has('MANAGE_ROLES'))
   return message.channel.send('No tienes permisos');
 
 
  if (!args[0]) return message.channel.send('Ingresa el nombre del rol a crear');
  if (args[0].includes(`:`)) return message.channel.send('No puedo crear un rol con esto, intenta crearlo desde la seccion de roles')
 
  message.guild.roles
   .create({
     name: args.join(' '),
     reason: 'Nuevo rol',
     color: 'RANDOM',
   })
   .then((role) => message.channel.send('Nuevo rol creado: ' + `${role}` ));
        
    } else {
            if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.channel.send('I do not have permissions');

    if (!message.member.permissions.has('MANAGE_ROLES'))
   return message.channel.send('You do not have Permissions to use this command');
 
 
  if (!args[0]) return message.channel.send('Enter the name of the role to create');
  if (args[0].includes(`:`)) return message.channel.send('I can not create a role with this, try to create it from the roles section')
 
  message.guild.roles
   .create({
     name: args.join(' '),
     reason: 'New role',
     color: 'RANDOM',
   })
   .then((role) => message.channel.send('New rol created: ' + `${role}` ));
    }

  },
};