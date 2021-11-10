const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const db = require('megadb')
const langs = new db.crearDB('langs')

module.exports = {
  name: "logromc",
  alias: ["logrominecraft"],
  execute: async(client, message, args) => {

    const texto = args.join(" ");

const texto_logro = texto.replace(/( )/g, '+');

	const servidor = message.guild.id
    
    if(langs.tiene(servidor)){
         if (!texto) return message.channel.send("Di algo para el logro");

 if (texto.length > 23) return message.channel.send("El logro solo puede contener menos de 23 caracteres");

 if (texto.length < 2) return message.channel.send("El logro solo puede contener más de 2 palabras");

const imagen = Math.floor(Math.random() * 38) + 1;

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(`https://minecraftskinstealer.com/achievement/${imagen}/%C2%A1Logro+obtenido%21/${texto_logro}`);

message.channel.send({ embeds: [embed] })
    } else {
         if (!texto) return message.channel.send("Text the achievement");

 if (texto.length > 23) return message.channel.send("The achievement can only contain up to 23 characters");

 if (texto.length < 2) return message.channel.send("The achievement must contain more than 2 words");

const imagen = Math.floor(Math.random() * 38) + 1;

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(`https://minecraftskinstealer.com/achievement/${imagen}/%C2%A1Logro+obtenido%21/${texto_logro}`);

message.channel.send({ embeds: [embed] })
    }

  },
};