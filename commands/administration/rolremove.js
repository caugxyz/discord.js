const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "rolremove",
  alias: ["Rolremove"],
  execute: async(client, message, args) => {
	
     const servidor = message.guild.id
      
	if(langs.tiene(servidor)){
        
            if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.channel.send("No tengo permisos");

if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send("No tienes permisos");

let persona = message.mentions.members.first() || message.guild.members.resolve(args[0]);

if (!persona) return message.channel.send('Tienes que mencionar a alguien o poner su id');

if (!args[1]) return message.channel.send('Tienes que mencionar a alguien para darle el rol');

let rol =
  message.mentions.roles.first() ||
  message.guild.roles.resolve(args[1]) ||
  message.guild.roles.cache.find((r) => r.name == args.slice(1).join(' '));

if (!rol) return message.channel.send('Este rol no existe en el servidor');
 if (!rol.editable)
  return message.channel.send('Este rol está mas alto que yo');
 if (rol.managed) return message.channel.send('No puedo manejar este rol');
 if (rol.comparePositionTo(message.member.roles.highest) > 0)
  return message.channel.send(
    'Este rol es más alto que tu'
  );
if (!persona.roles.cache.has(rol.id)) return message.channel.send('Does not have the role');

persona.roles
  .remove(rol)
  .catch(() => message.reply('An error occurred'))
  .then(() => {
    message.channel.send(`Rol **${rol.name}** removed to **${persona.user.username}**`);
  });
        
    } else {
            if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.channel.send("I don't have enough permissions");

if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send("You don't have enough permissions");

let persona = message.mentions.members.first() || message.guild.members.resolve(args[0]);

if (!persona) return message.channel.send('You must mention someone or put their id');

if (!args[1]) return message.channel.send('You must mention or put the id of the role to give');

let rol =
  message.mentions.roles.first() ||
  message.guild.roles.resolve(args[1]) ||
  message.guild.roles.cache.find((r) => r.name == args.slice(1).join(' '));

if (!rol) return message.channel.send('This role does not exist on the server');
 if (!rol.editable)
  return message.channel.send('This role is above mine');
 if (rol.managed) return message.channel.send('I can not handle the role');
 if (rol.comparePositionTo(message.member.roles.highest) > 0)
  return message.channel.send(
    'That role is higher than yours'
  );
if (!persona.roles.cache.has(rol.id)) return message.channel.send('Does not have the role');

persona.roles
  .remove(rol)
  .catch(() => message.reply('An error occurred'))
  .then(() => {
    message.channel.send(`Rol **${rol.name}** removed to **${persona.user.username}**`);
  });
    }
  },
};