const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "roleadd",
  alias: ["Roleadd"],
  execute: async(client, message, args) => {
      
      const servidor = message.guild.id

	if(langs.tiene(servidor)) {
        
if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.channel.send('No tengo permisos');

if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send('No tienes permisos');

let persona =
  message.mentions.members.first() ||
  message.guild.members.resolve(args[0]);

if (!persona) return message.channel.send(`Tienes que mencionar a alguien para darle el rol`);

if (!args[1]) return message.channel.send(`Menciona el rol o el id para dar`);

let rol =
  message.mentions.roles.first() ||
  message.guild.roles.resolve(args[1]) ||
  message.guild.roles.cache.find((r) => r.name == args.slice(1).join(' '));

if (!rol) return message.channel.send('Rol no encontrado en el servidor');
if (!rol.editable)
  return message.channel.send('Este rol está encima de mi, no le puedo dar el rol a nadie');
if (rol.comparePositionTo(message.member.roles.highest) > 0)
  return message.channel.send(
    'Este rol está más alto que tu rol, no se lo puedo dar a nadie'
  );

persona.roles
  .add(rol)
  .catch((e) => message.reply('Ocurrió un error'))
  .then(() => {
    message.channel.send(`Rol **${rol.name}** añadido a **${persona.user.username}**`);
  });
        
    } else {
            if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.channel.send('I do not have permissions');

if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send('You do not have permissions');

let persona =
  message.mentions.members.first() ||
  message.guild.members.resolve(args[0]);

if (!persona) return message.channel.send(`You must mention or put someone's id to give them the role`);

if (!args[1]) return message.channel.send(`You must mention or put the name or id of the role to give`);

let rol =
  message.mentions.roles.first() ||
  message.guild.roles.resolve(args[1]) ||
  message.guild.roles.cache.find((r) => r.name == args.slice(1).join(' '));

if (!rol) return message.channel.send('Role not found on server');
if (!rol.editable)
  return message.channel.send('The role is above me, I can not give the role to anyone');
if (rol.comparePositionTo(message.member.roles.highest) > 0)
  return message.channel.send(
    'This role is higher than your highest role (in terms of hierarchy), so you can not give it to anyone'
  );

persona.roles
  .add(rol)
  .catch((e) => message.reply('An error occurred'))
  .then(() => {
    message.channel.send(`Rol **${rol.name}** added to **${persona.user.username}**`);
  });
    }

  },
};